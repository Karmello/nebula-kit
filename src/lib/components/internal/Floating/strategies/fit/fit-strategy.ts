import { applyViewportPadding, expandAxes, formatPlacement, parsePlacement, Rect, Side } from '../../helpers'
import { FloatingFitProps, FloatingResolved } from '../../definitions'

type BlockSpace = {
  side: Side
  space: number
}

/**
 * Returns available block space for a side.
 * Block space = space along the active axis.
 */
const getBlockSpace = (side: Side, anchor: DOMRect, viewport: Rect, offset: number): number => {
  switch (side) {
    case 'bottom':
      return viewport.bottom - anchor.bottom - offset
    case 'top':
      return anchor.top - viewport.top - offset
    case 'right':
      return viewport.right - anchor.right - offset
    case 'left':
      return anchor.left - viewport.left - offset
  }
}

export const resolveFitStrategy = (props: Omit<FloatingFitProps, 'children' | 'onResolve'>): FloatingResolved => {
  const { mode, placement = 'bottom-start', floatingBlockSize, offset = 0, viewportPadding = 0, anchorRef } = props

  const anchor = anchorRef.current?.getBoundingClientRect()
  if (!anchor) {
    return { placement }
  }

  const rawViewport = {
    top: 0,
    left: 0,
    right: window.innerWidth,
    bottom: window.innerHeight,
    width: window.innerWidth,
    height: window.innerHeight,
  }

  const viewport = applyViewportPadding(rawViewport, viewportPadding)

  const { side: preferredSide, align } = parsePlacement(placement)

  // allowed sides are constrained to ONE axis
  const allowedSides = expandAxes(mode.split('-')[1] as never)

  const spaces: BlockSpace[] = allowedSides.map((side: Side) => ({
    side,
    space: getBlockSpace(side, anchor, viewport, offset),
  }))

  const preferred = spaces.find(s => s.side === preferredSide)

  const fitsFully = (space: number) => space >= floatingBlockSize

  // --- Phase 1: preferred inertia ---
  if (preferred && fitsFully(preferred.space)) {
    return {
      placement: formatPlacement(preferred.side, align),
      blockSize: floatingBlockSize,
    }
  }

  // --- Phase 2: flip only if beneficial ---
  const opposite = spaces.find(s => s.side !== preferredSide)

  if (preferred && opposite && opposite.space > preferred.space && fitsFully(opposite.space)) {
    return {
      placement: formatPlacement(opposite.side, align),
      blockSize: floatingBlockSize,
    }
  }

  // --- Phase 3: fallback (pick side with more visible space) ---
  const best = spaces.reduce((a, b) => (a.space >= b.space ? a : b))

  const resolvedBlockSpace = Math.max(0, best.space)

  return {
    placement: formatPlacement(best.side, align),
    blockSize: Math.min(floatingBlockSize, resolvedBlockSpace),
  }
}
