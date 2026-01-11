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

const computeBlockBounds = (
  rect: DOMRect,
  blockSize: number,
  align: Align
): { top: number; bottom: number } => {
  if (align === 'start') {
    return {
      top: rect.top,
      bottom: rect.top + blockSize,
    }
  }

  if (align === 'end') {
    return {
      top: rect.bottom - blockSize,
      bottom: rect.bottom,
    }
  }

  const center = rect.top + rect.height / 2
  const half = blockSize / 2

  return {
    top: center - half,
    bottom: center + half,
  }
}

const computeBlockOverflow = (
  bounds: { top: number; bottom: number },
  viewportTop: number,
  viewportBottom: number
): number => {
  const overflowTop = Math.max(0, viewportTop - bounds.top)
  const overflowBottom = Math.max(0, bounds.bottom - viewportBottom)

  return overflowTop + overflowBottom
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
    offset = 0,
    placement,
    viewportPadding = 0,
  } = props

  const anchorEl = anchorRef.current
  if (!anchorEl) return

  const rect = anchorEl.getBoundingClientRect()

  const pad = viewportPadding
  const offsetPx = offset

  // Viewport bounds with padding applied
  const viewportTop = pad
  const viewportBottom = window.innerHeight - pad
  const viewportLeft = pad
  const viewportRight = window.innerWidth - pad

  // Optional known sizes
  const blockPx = floatingBlockSize != null ? floatingBlockSize : undefined
  const inlinePx = floatingInlineSize != null ? floatingInlineSize : undefined

  const { side: requestedSide, align: requestedAlign } = parsePlacement(placement)

  /* ----------------------------
   * ALIGNMENT RESOLUTION (X axis)
   * ---------------------------- */

  let resolvedAlign = requestedAlign

  if (inlinePx != null || blockPx != null) {
    const isVerticalSide = requestedSide === 'top' || requestedSide === 'bottom'
    const isHorizontalSide = requestedSide === 'left' || requestedSide === 'right'

    let initialOverflow = 0

    if (isVerticalSide && inlinePx != null) {
      const bounds = computeInlineBounds(rect, inlinePx, requestedAlign)
      initialOverflow = computeInlineOverflow(bounds, viewportLeft, viewportRight)
    }

    if (isHorizontalSide && blockPx != null) {
      const bounds = computeBlockBounds(rect, blockPx, requestedAlign)
      initialOverflow = computeBlockOverflow(bounds, viewportTop, viewportBottom)
    }

    if (initialOverflow > 0) {
      const alignCandidates = getAlignCandidates(requestedAlign)

      let bestAlign = requestedAlign
      let bestOverflow = initialOverflow

      for (const align of alignCandidates) {
        let overflow = bestOverflow

        if (isVerticalSide && inlinePx != null) {
          const bounds = computeInlineBounds(rect, inlinePx, align)
          overflow = computeInlineOverflow(bounds, viewportLeft, viewportRight)
        }

        if (isHorizontalSide && blockPx != null) {
          const bounds = computeBlockBounds(rect, blockPx, align)
          overflow = computeBlockOverflow(bounds, viewportTop, viewportBottom)
        }

        if (overflow < bestOverflow) {
          bestOverflow = overflow
          bestAlign = align
        }

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
    } else if (side === 'right') {
      available = viewportRight - (rect.right + offsetPx)
    } else if (side === 'left') {
      available = rect.left - offsetPx - viewportLeft
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
