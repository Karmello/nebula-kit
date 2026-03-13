import { BoxProps, ButtonProps, HtmlTagProps } from 'lib/components'

export const REVEAL_TAGS = ['div', 'section', 'article', 'aside', 'li'] as const
export const DEFAULT_REVEAL_INTENT: RevealProps['intent'] = 'tertiary'
export const DEFAULT_REVEAL_SIZE: RevealProps['size'] = 'sm'

export type RevealTag = (typeof REVEAL_TAGS)[number]

type RevealOwnProps = {
  label: string
}

type PropsFromHtmlTag<T extends RevealTag = 'div'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

type PropsFromBox<T extends RevealTag = 'div'> = Pick<BoxProps<T>, 'color' | 'intent'>

type PropsFromButton = Pick<ButtonProps<'button'>, 'size' | 'disabled'>

export type RevealProps<T extends RevealTag = 'div'> = PropsFromHtmlTag<T> & PropsFromBox<T> & PropsFromButton & RevealOwnProps
