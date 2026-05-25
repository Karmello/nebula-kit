import { BoxProps } from '../../core/Box'

type FadeOwnProps = {
  visible: boolean
  duration?: number
  easing?: string
}

type PropsFromBox = Pick<BoxProps<'span'>, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<'span'>['children']
}

export type FadeProps = PropsFromBox & FadeOwnProps
