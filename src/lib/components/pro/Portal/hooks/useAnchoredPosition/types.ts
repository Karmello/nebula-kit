export type PositionSide = 'top' | 'right' | 'bottom' | 'left'

export type PositionAlign = 'start' | 'center' | 'end'

export type AnchoredPlacement = `${PositionSide}-${PositionAlign}`

export type AnchoredPosition = {
  top?: number
  left?: number
}
