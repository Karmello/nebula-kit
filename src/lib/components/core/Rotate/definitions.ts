import { BoxProps } from '../Box'

type RotateOwnProps = {
  angle: number
  duration?: number
  easing?: string
}

type PropsFromBox = Pick<BoxProps<'span'>, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<'span'>['children']
}

export type RotateProps = PropsFromBox & RotateOwnProps
