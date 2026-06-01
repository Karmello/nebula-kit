import { type ResizeProps } from '../Resize'
import { BoxProps } from '../Box'
import { type ButtonProps } from '../Button'

export const REVEAL_TAGS = ['div', 'section', 'article', 'aside', 'li'] as const
export const DEFAULT_REVEAL_INTENT: RevealProps['intent'] = 'tertiary'
export const DEFAULT_REVEAL_SIZE: RevealProps['size'] = 'sm'

export type RevealTag = (typeof REVEAL_TAGS)[number]

type RevealOwnProps = {
  label: string
}

type PropsFromResize = {
  children: ResizeProps['children']
}

type PropsFromBox<T extends RevealTag = 'div'> = Pick<BoxProps<T>, 'tag' | 'tagAttrs' | 'tagRef' | 'color' | 'intent'>

type PropsFromButton = Pick<ButtonProps<'button'>, 'size' | 'disabled'>

export type RevealProps<T extends RevealTag = 'div'> = PropsFromResize & PropsFromBox<T> & PropsFromButton & RevealOwnProps
