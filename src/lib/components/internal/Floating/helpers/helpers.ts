import { PortalPlacement } from 'lib/components/core/Portal'

export type Side = 'top' | 'bottom' | 'left' | 'right'
export type Align = 'start' | 'center' | 'end'

export type ParsedPlacement = {
  side: Side
  align: Align
}

export type Rect = {
  top: number
  right: number
  bottom: number
  left: number
  width: number
  height: number
}

/* ---------------- placement ---------------- */

export const parsePlacement = (placement: string): ParsedPlacement => {
  const [side, align] = placement.split('-') as [Side, Align]
  return { side, align }
}

export const formatPlacement = (side: Side, align: Align): PortalPlacement => `${side}-${align}`

/* ---------------- axes ---------------- */

export const expandAxes = (axes: 'both' | 'x' | 'y' = 'both'): Side[] => {
  if (axes === 'x') return ['left', 'right']
  if (axes === 'y') return ['top', 'bottom']
  return ['top', 'right', 'bottom', 'left']
}

/* ---------------- viewport ---------------- */

export const applyViewportPadding = (viewport: Rect, padding = 0): Rect => ({
  top: viewport.top + padding,
  right: viewport.right - padding,
  bottom: viewport.bottom - padding,
  left: viewport.left + padding,
  width: viewport.width - padding * 2,
  height: viewport.height - padding * 2,
})

/**
 * Normalizes inline-size envelope against viewport width.
 * Safe for all strategies.
 */
export const normalizeInlineEnvelope = (minInlineSize: number, maxInlineSize: number, viewportWidth: number) => {
  const max = Math.min(maxInlineSize, viewportWidth)
  const min = Math.min(minInlineSize, max)

  return { min, max }
}

/* ---------------- geometry ---------------- */

/**
 * Returns raw horizontal inline space available for a side.
 * No strategy logic. No envelope logic.
 */
export const getInlineSpace = (side: Side, anchor: Rect, viewport: Rect, offset = 0): number => {
  switch (side) {
    case 'left':
      return anchor.left - viewport.left - offset
    case 'right':
      return viewport.right - anchor.right - offset
    case 'top':
    case 'bottom':
      return viewport.width
  }
}

/* ---------------- thirds alignment ---------------- */

/**
 * Auto alignment via thirds on the cross-axis.
 * Height-blind and strategy-agnostic.
 */
export const resolveAutoAlign = (side: Side, anchor: Rect, viewport: Rect): Align => {
  const isVertical = side === 'top' || side === 'bottom'

  const start = isVertical ? viewport.left : viewport.top
  const end = isVertical ? viewport.right : viewport.bottom
  const size = end - start

  const center = isVertical ? anchor.left + anchor.width / 2 : anchor.top + anchor.height / 2

  const third = size / 3

  if (center < start + third) return 'start'
  if (center > start + third * 2) return 'end'
  return 'center'
}

/* ---------------- thirds side (nullable) ---------------- */

/**
 * Auto side via thirds.
 * Returns null in the middle third (no opinion).
 */
export const resolveAutoSide = (axes: 'both' | 'x' | 'y', anchor: Rect, viewport: Rect): Side | null => {
  if (axes === 'y' || axes === 'both') {
    const centerY = anchor.top + anchor.height / 2
    const third = viewport.height / 3

    if (centerY < third) return 'bottom'
    if (centerY > third * 2) return 'top'
    return null
  }

  if (axes === 'x' || axes === 'both') {
    const centerX = anchor.left + anchor.width / 2
    const third = viewport.width / 3

    if (centerX < third) return 'right'
    if (centerX > third * 2) return 'left'
    return null
  }

  return null
}
