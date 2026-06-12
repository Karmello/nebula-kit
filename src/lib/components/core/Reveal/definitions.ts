import { ButtonProps, ResizeProps } from 'lib/index.core'
import { RevealTag } from 'lib/types'

import { BoxProps } from '../Box'

export const DEFAULT_REVEAL_INTENT: RevealProps['intent'] = 'tertiary'
export const DEFAULT_REVEAL_SCALE: RevealProps['scale'] = 'sm'

type RevealOwnProps = {
  label: string
}

type PropsFromResize = {
  children: ResizeProps['children']
}

type PropsFromBox<T extends RevealTag = 'div'> = Pick<BoxProps<T>, 'tag' | 'tagAttrs' | 'tagRef' | 'color' | 'intent'>

type PropsFromButton = Pick<ButtonProps<'button'>, 'scale' | 'disabled'>

export type RevealProps<T extends RevealTag = 'div'> = PropsFromResize & PropsFromBox<T> & PropsFromButton & RevealOwnProps
