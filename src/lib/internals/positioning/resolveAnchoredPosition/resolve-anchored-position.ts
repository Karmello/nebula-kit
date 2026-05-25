import { AnchoredPlacement, AnchoredPosition } from '../definitions'

export type ResolveAnchoredPositionProps = {
  anchor: HTMLElement
  placement: AnchoredPlacement
  offset?: number
}

export const resolveAnchoredPosition = ({ anchor, placement, offset }: ResolveAnchoredPositionProps): AnchoredPosition => {
  const anchorRect = anchor.getBoundingClientRect()

  let top = anchorRect.top + window.scrollY
  let left = anchorRect.left + window.scrollX

  const [side, align] = placement.split('-')

  if (side === 'bottom') {
    top += anchorRect.height
  }

  if (side === 'right') {
    left += anchorRect.width
  }

  if (offset) {
    if (side === 'bottom') {
      top += offset
    }

    if (side === 'top') {
      top -= offset
    }

    if (side === 'right') {
      left += offset
    }

    if (side === 'left') {
      left -= offset
    }
  }

  if (side === 'top' || side === 'bottom') {
    if (align === 'center') {
      left += anchorRect.width / 2
    }

    if (align === 'end') {
      left += anchorRect.width
    }
  } else {
    if (align === 'center') {
      top += anchorRect.height / 2
    }

    if (align === 'end') {
      top += anchorRect.height
    }
  }

  return { top, left }
}
