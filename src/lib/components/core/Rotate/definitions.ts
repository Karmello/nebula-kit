import { BoxProps } from '../Box'

export const DEFAULT_ROTATE_DURATION: RotateProps['duration'] = 200
export const DEFAULT_ROTATE_EASING: RotateProps['easing'] = 'linear'

type RotateOwnProps = {
  angle: number
  duration?: number
  easing?: string
}

type PropsFromBox = Pick<BoxProps<'span'>, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<'span'>['children']
}

export type RotateProps = PropsFromBox & RotateOwnProps
