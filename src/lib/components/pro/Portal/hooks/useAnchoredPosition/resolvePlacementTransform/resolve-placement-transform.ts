import { AnchoredPlacement } from '../types'

export type ResolvePlacementTransformProps = {
  placement: AnchoredPlacement
}

export const resolvePlacementTransform = ({ placement }: ResolvePlacementTransformProps) => {
  const [side, align] = placement.split('-')

  const transforms: string[] = []

  if (side === 'top') {
    transforms.push('translateY(-100%)')
  }

  if (side === 'left') {
    transforms.push('translateX(-100%)')
  }

  if ((side === 'top' || side === 'bottom') && align === 'center') {
    transforms.push('translateX(-50%)')
  }

  if ((side === 'top' || side === 'bottom') && align === 'end') {
    transforms.push('translateX(-100%)')
  }

  if ((side === 'left' || side === 'right') && align === 'center') {
    transforms.push('translateY(-50%)')
  }

  if ((side === 'left' || side === 'right') && align === 'end') {
    transforms.push('translateY(-100%)')
  }

  return transforms.length ? transforms.join(' ') : undefined
}
