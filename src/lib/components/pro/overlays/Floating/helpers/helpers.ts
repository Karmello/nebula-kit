import { PortalPlacement } from 'lib/components/core/utility/Portal'

import { FloatingProps, FloatingResolved } from './../definitions'

type Side = 'top' | 'bottom' | 'left' | 'right'
type Align = 'start' | 'center' | 'end'

type PlacementParts = {
  side: Side
  align: Align
}

const parsePlacement = (placement?: string): PlacementParts => {
  if (!placement) {
    return { side: 'bottom', align: 'start' }
  }

  const [side, align] = placement.split('-') as [Side, Align]
  return { side, align }
}

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

const alignOrder: Align[] = ['start', 'center', 'end']

const getAlignCandidates = (align: Align): Align[] => {
  const index = alignOrder.indexOf(align)
  const candidates: Align[] = [align]

  if (index > 0) candidates.push(alignOrder[index - 1])
  if (index < alignOrder.length - 1) candidates.push(alignOrder[index + 1])

  for (const a of alignOrder) {
    if (!candidates.includes(a)) {
      candidates.push(a)
    }
  }

  return candidates
}

const computeInlineBounds = (
  rect: DOMRect,
  inlineSize: number,
  align: Align
): { left: number; right: number } => {
  if (align === 'start') {
    return { left: rect.left, right: rect.left + inlineSize }
  }

  if (align === 'end') {
    return { left: rect.right - inlineSize, right: rect.right }
  }

  const center = rect.left + rect.width / 2
  const half = inlineSize / 2

  return { left: center - half, right: center + half }
}

const computeInlineOverflow = (
  bounds: { left: number; right: number },
  viewportLeft: number,
  viewportRight: number
): number => {
  const overflowLeft = Math.max(0, viewportLeft - bounds.left)
  const overflowRight = Math.max(0, bounds.right - viewportRight)
  return overflowLeft + overflowRight
}

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
    return { top: rect.top, bottom: rect.top + blockSize }
  }

  if (align === 'end') {
    return { top: rect.bottom - blockSize, bottom: rect.bottom }
  }

  const center = rect.top + rect.height / 2
  const half = blockSize / 2

  return { top: center - half, bottom: center + half }
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

export const resolve = (props: FloatingProps, setResolved: (resolved: FloatingResolved) => void) => {
  const {
    anchorRef,
    floatingBlockSize,
    floatingInlineSize,
    offset = 0,
    placement,
    flipThresholdRatio = 0,
    viewportPadding = 0,
  } = props

  const anchorEl = anchorRef.current
  if (!anchorEl) return

  const rect = anchorEl.getBoundingClientRect()

  const pad = viewportPadding
  const offsetPx = offset

  const viewportTop = pad
  const viewportBottom = window.innerHeight - pad
  const viewportLeft = pad
  const viewportRight = window.innerWidth - pad

  const blockPx = floatingBlockSize != null ? floatingBlockSize : undefined
  const inlinePx = floatingInlineSize != null ? floatingInlineSize : undefined

  const { side: requestedSide, align: requestedAlign } = parsePlacement(placement)

  /* ----------------------------
   * ALIGNMENT RESOLUTION
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
   * SIDE RESOLUTION (RATIO-BASED BIAS)
   * ------------------------- */

  const computeAvailable = (side: Side) => {
    if (side === 'bottom') {
      return viewportBottom - (rect.bottom + offsetPx)
    }
    if (side === 'top') {
      return rect.top - offsetPx - viewportTop
    }
    if (side === 'right') {
      return viewportRight - (rect.right + offsetPx)
    }
    return rect.left - offsetPx - viewportLeft
  }

  const requestedAvailable = computeAvailable(requestedSide)
  const oppositeSide = getOppositeSide(requestedSide)
  const oppositeAvailable = computeAvailable(oppositeSide)

  const viewportMainAxis =
    requestedSide === 'top' || requestedSide === 'bottom'
      ? viewportBottom - viewportTop
      : viewportRight - viewportLeft

  const ratio = Math.min(1, Math.max(0, flipThresholdRatio))
  const thresholdPx = viewportMainAxis * ratio

  let resolvedSide = requestedSide
  let resolvedAvailableBlockSize = requestedAvailable
  let resolvedBlockSize: number | undefined

  if (blockPx == null) {
    // MODE 2: size-agnostic, ratio-biased
    if (oppositeAvailable >= requestedAvailable + thresholdPx) {
      resolvedSide = oppositeSide
      resolvedAvailableBlockSize = oppositeAvailable
    }
  } else {
    // MODE 1: size-aware (unchanged behavior)
    const requestedVisible = computeVisibleBlockSize(requestedAvailable, blockPx)
    const oppositeVisible = computeVisibleBlockSize(oppositeAvailable, blockPx)

    if (oppositeVisible > requestedVisible) {
      resolvedSide = oppositeSide
      resolvedAvailableBlockSize = oppositeAvailable
      if (oppositeVisible < blockPx) {
        resolvedBlockSize = oppositeVisible
      }
    } else {
      if (requestedVisible < blockPx) {
        resolvedBlockSize = requestedVisible
      }
    }
  }

  /* -------------------------
   * INLINE AVAILABLE SPACE
   * ------------------------- */

  let resolvedAvailableInlineSize = 0

  if (resolvedSide === 'top' || resolvedSide === 'bottom') {
    resolvedAvailableInlineSize = viewportRight - viewportLeft
  } else if (resolvedSide === 'right') {
    resolvedAvailableInlineSize = viewportRight - (rect.right + offsetPx)
  } else {
    resolvedAvailableInlineSize = rect.left - viewportLeft
  }

  setResolved({
    placement: `${resolvedSide}-${resolvedAlign}` as PortalPlacement,
    blockSize: resolvedBlockSize,
    availableBlockSize: resolvedAvailableBlockSize,
    availableInlineSize: resolvedAvailableInlineSize,
  })
}
