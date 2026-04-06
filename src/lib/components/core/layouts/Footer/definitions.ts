import { BoxProps, HtmlTagProps } from 'lib/components'
import { SwitchAt } from 'lib/definitions'

export const FOOTER_TAGS = ['div', 'footer'] as const
export const DEFAULT_FOOTER_BORDER_INTENT: FooterProps['borderIntent'] = 'tertiary'

export type FooterTag = (typeof FOOTER_TAGS)[number]

type FooterOwnProps = {
  switchAt?: SwitchAt
  borderIntent?: BoxProps['intent']
}

type PropsFromHtmlTag<T extends FooterTag = 'div'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

type PropsFromBox<T extends FooterTag = 'div'> = Pick<
  BoxProps<T>,
  'padding' | 'paddingBlock' | 'paddingInline' | 'paddingTop' | 'paddingRight' | 'paddingBottom' | 'paddingLeft'
>

export type FooterProps<T extends FooterTag = 'div'> = PropsFromHtmlTag<T> & PropsFromBox<T> & FooterOwnProps
