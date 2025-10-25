import { BoxProps, ButtonProps, HtmlTagProps } from 'lib/components'

export const RevealTag = ['div', 'section', 'article', 'aside', 'li'] as const
export const DEFAULT_REVEAL_INTENT: RevealProps['intent'] = 'tertiary'
export const DEFAULT_REVEAL_SIZE: RevealProps['size'] = 'sm'
export const DEFAULT_REVEAL_LABEL_ALIGN: RevealProps['labelAlign'] = 'left'

export type RevealTag = (typeof RevealTag)[number]

type RevealOwnProps = {
  label: string
}

type PropsFromHtmlTag<T extends RevealTag = 'div'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

type PropsFromBox<T extends RevealTag = 'div'> = Pick<BoxProps<T>, 'intent'>

type PropsFromButton = Pick<ButtonProps<'button'>, 'size' | 'disabled' | 'labelIntent' | 'labelAlign'>

export type RevealProps<T extends RevealTag = 'div'> = PropsFromHtmlTag<T> &
  PropsFromBox<T> &
  PropsFromButton &
  RevealOwnProps
