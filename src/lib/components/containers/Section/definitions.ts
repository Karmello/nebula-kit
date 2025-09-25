import { JSX } from 'react'

import { BoxProps, HtmlTagProps } from 'lib/components'

export const SectionTag = ['section', 'article', 'aside', 'div'] as const
export type SectionTag = (typeof SectionTag)[number]

export type SectionOwnProps = {
  heading: string | JSX.Element
  hideDivider?: boolean
}

type PropsFromHtmlTag<T extends SectionTag = 'section'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

type PropsFromBox<T extends SectionTag = 'section'> = Pick<
  BoxProps<T>,
  | 'variant'
  | 'intent'
  | 'borderRadius'
  | 'padding'
  | 'paddingInline'
  | 'paddingBlock'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
>

export type SectionProps<T extends SectionTag = 'section'> = PropsFromHtmlTag<T> &
  PropsFromBox<T> &
  SectionOwnProps
