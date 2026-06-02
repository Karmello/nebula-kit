import { RevealTag } from 'lib/types'

import { BoxProps } from '../Box'
import { type ButtonProps } from '../Button'
import { type ResizeProps } from '../Resize'

export const DEFAULT_REVEAL_INTENT: RevealProps['intent'] = 'tertiary'
export const DEFAULT_REVEAL_SIZE: RevealProps['size'] = 'sm'

type RevealOwnProps = {
  label: string
}

type PropsFromResize = {
  children: ResizeProps['children']
}

type PropsFromBox<T extends RevealTag = 'div'> = Pick<BoxProps<T>, 'tag' | 'tagAttrs' | 'tagRef' | 'color' | 'intent'>

type PropsFromButton = Pick<ButtonProps<'button'>, 'size' | 'disabled'>

export type RevealProps<T extends RevealTag = 'div'> = PropsFromResize & PropsFromBox<T> & PropsFromButton & RevealOwnProps
