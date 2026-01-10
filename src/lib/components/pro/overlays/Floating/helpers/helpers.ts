import { PortalPlacement } from 'lib/components/core/utility/Portal'

import { FloatingProps, FloatingResolved } from './../definitions'

/**
 * Side = primary placement axis.
 * This answers: "On which side of the anchor does the floating element live?"
 *
 * IMPORTANT:
 * There is intentionally no "center" side.
 * Floating elements always attach to an edge, never overlap the anchor.
 */
type Side = 'top' | 'bottom' | 'left' | 'right'

/**
 * Align = secondary placement axis.
 * This answers: "How is the floating element aligned along that side?"
 *
 * Alignments form a linear order:
 *   start <-> center <-> end
 *
 * This ordering is crucial for step-wise nudging.
 */
type Align = 'start' | 'center' | 'end'

/**
 * Parsed placement split into independent axes.
 * Keeping this explicit avoids string-based logic later.
 */
type PlacementParts = {
  side: Side
  align: Align
}

/**
 * Parses a placement string into side + alignment.
 *
 * Default placement is bottom-start when not provided.
 * This is the system baseline and matches most dropdown expectations.
 */
const parsePlacement = (placement?: string): PlacementParts => {
  if (!placement) {
    return { side: 'bottom', align: 'start' }
  }

  const [side, align] = placement.split('-') as [Side, Align]

  return { side, align }
}

/**
 * Returns the opposite side on the primary axis.
 *
 * Used for vertical flipping (top <-> bottom)
 * and later extensible to horizontal flipping (left <-> right).
 */
const getOppositeSide = (side: Side): Side => {
  switch (side) {
    case 'top':
      return 'bottom'
    case 'bottom':
      return 'top'
    case 'left':
      return 'right'
    case 'right':
      return 'left'
  }
}

/**
 * Canonical alignment order.
 * This defines "distance" between alignments.
 *
 * DO NOT reorder this without adjusting tests.
 */
const alignOrder: Align[] = ['start', 'center', 'end']

/**
 * Generates alignment candidates ordered by *minimal deviation from intent*.
 *
 * This function is intentionally PURE and GEOMETRY-AGNOSTIC.
 *
 * It answers only:
 *   "If the requested alignment does not work, what should be tried next
 *    with the smallest possible change?"
 *
 * Geometry (overflow) is evaluated later during scoring.
 *
 * Examples:
 *   start  -> [start, center, end]
 *   center -> [center, start, end] (deterministic but symmetric)
 *   end    -> [end, center, start]
 */
const getAlignCandidates = (align: Align): Align[] => {
  const index = alignOrder.indexOf(align)

  const candidates: Align[] = [align]

  // Step 1: nearest neighbors (distance = 1)
  if (index > 0) {
    candidates.push(alignOrder[index - 1])
  }

  if (index < alignOrder.length - 1) {
    candidates.push(alignOrder[index + 1])
  }

  // Step 2: farthest (distance = 2), only if still missing
  for (const a of alignOrder) {
    if (!candidates.includes(a)) {
      candidates.push(a)
    }
  }

  return candidates
}

/**
 * Computes the horizontal bounds of the floating element
 * for a given alignment, relative to the anchor rect.
 *
 * This is pure geometry, no viewport logic here.
 */
const computeInlineBounds = (
  rect: DOMRect,
  inlineSize: number,
  align: Align
): { left: number; right: number } => {
  if (align === 'start') {
    return {
      left: rect.left,
      right: rect.left + inlineSize,
    }
  }

  if (align === 'end') {
    return {
      left: rect.right - inlineSize,
      right: rect.right,
    }
  }

  // center alignment
  const center = rect.left + rect.width / 2
  const half = inlineSize / 2

  return {
    left: center - half,
    right: center + half,
  }
}

/**
 * Computes total horizontal overflow against viewport bounds.
 *
 * IMPORTANT:
 * Overflow is additive (left + right).
 * This allows comparing "how bad" two placements are,
 * not just whether they overflow or not.
 */
const computeInlineOverflow = (
  bounds: { left: number; right: number },
  viewportLeft: number,
  viewportRight: number
): number => {
  const overflowLeft = Math.max(0, viewportLeft - bounds.left)
  const overflowRight = Math.max(0, bounds.right - viewportRight)

  return overflowLeft + overflowRight
}

/**
 * Computes how much vertical content would actually be visible.
 *
 * If blockSize is unknown, we assume all available space is usable
 * and do not attempt to clamp.
 */
const computeVisibleBlockSize = (available: number, blockSize?: number): number => {
  if (blockSize == null) return available
  return Math.max(0, Math.min(blockSize, available))
}

/**
 * Core resolver.
 *
 * This function is a pure constraint solver:
 *  - no state
 *  - no DOM writes
 *  - safe to call on every scroll / resize
 *
 * Responsibilities:
 *  1. Respect requested placement if fully visible
 *  2. Nudge alignment step-wise when clipped
 *  3. Flip side only when it improves visible content
 *  4. Clamp block size only as a last resort
 *
 * SAME logic applies to Tooltip, Dropdown, and any future floating UI.
 */
export const resolve = (props: FloatingProps, setResolved: (resolved: FloatingResolved) => void) => {
  const {
    anchorRef,
    floatingBlockSize,
    floatingInlineSize,
    offset = '0px',
    placement,
    viewportPadding = '0px',
  } = props

  const anchorEl = anchorRef.current
  if (!anchorEl) return

  const rect = anchorEl.getBoundingClientRect()

  const pad = resolveCssValue(viewportPadding)
  const offsetPx = resolveCssValue(offset)

  // Viewport bounds with padding applied
  const viewportTop = pad
  const viewportBottom = window.innerHeight - pad
  const viewportLeft = pad
  const viewportRight = window.innerWidth - pad

  // Optional known sizes
  const blockPx = floatingBlockSize != null ? resolveCssValue(floatingBlockSize) : undefined
  const inlinePx = floatingInlineSize != null ? resolveCssValue(floatingInlineSize) : undefined

  const { side: requestedSide, align: requestedAlign } = parsePlacement(placement)

  /* ----------------------------
   * ALIGNMENT RESOLUTION (X axis)
   * ---------------------------- */

  let resolvedAlign = requestedAlign

  // Alignment resolution only runs when inline size is known.
  // Otherwise we must not guess.
  if (inlinePx != null) {
    const initialBounds = computeInlineBounds(rect, inlinePx, requestedAlign)
    const initialOverflow = computeInlineOverflow(initialBounds, viewportLeft, viewportRight)

    // Only attempt nudging if the requested alignment actually overflows
    if (initialOverflow > 0) {
      const alignCandidates = getAlignCandidates(requestedAlign)

      let bestAlign = requestedAlign
      let bestOverflow = initialOverflow

      for (const align of alignCandidates) {
        const bounds = computeInlineBounds(rect, inlinePx, align)
        const overflow = computeInlineOverflow(bounds, viewportLeft, viewportRight)

        // Strictly better overflow wins.
        // Distance-based ordering handles tie-breaking implicitly.
        if (overflow < bestOverflow) {
          bestOverflow = overflow
          bestAlign = align
        }

        // Early exit: perfect fit found
        if (overflow === 0) break
      }

      resolvedAlign = bestAlign
    }
  }

  /* -------------------------
   * SIDE RESOLUTION (Y axis)
   * ------------------------- */

  // Only two candidates: requested side and its opposite.
  const sideCandidates: Side[] = [requestedSide, getOppositeSide(requestedSide)]

  let resolvedSide = requestedSide
  let resolvedBlockSize: number | undefined

  let bestVisible = -1

  for (const side of sideCandidates) {
    let available = 0

    if (side === 'bottom') {
      available = viewportBottom - (rect.bottom + offsetPx)
    } else if (side === 'top') {
      available = rect.top - offsetPx - viewportTop
    } else {
      // left/right vertical logic not implemented yet
      available = viewportBottom - viewportTop
    }

    const visible = computeVisibleBlockSize(available, blockPx)

    // Prefer the side that shows more content.
    // This prevents flipping just to show fewer items.
    if (visible > bestVisible) {
      bestVisible = visible
      resolvedSide = side

      // Clamp only when neither side can fully fit.
      if (blockPx != null && visible < blockPx) {
        resolvedBlockSize = visible
      } else {
        resolvedBlockSize = undefined
      }
    }
  }

  setResolved({
    placement: `${resolvedSide}-${resolvedAlign}` as PortalPlacement,
    blockSize: resolvedBlockSize,
  })
}

/**
 * Resolves CSS size values (px, rem, %, etc.) to pixels.
 *
 * This intentionally uses a detached DOM node so it:
 *  - works for any valid CSS length
 *  - does not depend on component DOM structure
 *
 * Used sparingly and only in resolver boundaries.
 */
const resolveCssValue = (value?: string): number => {
  if (!value) return 0

  const el = document.createElement('div')
  el.style.position = 'absolute'
  el.style.visibility = 'hidden'
  el.style.pointerEvents = 'none'
  el.style.width = value

  document.body.appendChild(el)
  const px = parseFloat(getComputedStyle(el).width)
  document.body.removeChild(el)

  return Number.isFinite(px) ? px : 0
}
