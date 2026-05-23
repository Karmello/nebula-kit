import { BoxProps } from 'lib/components'
import { SwitchAt } from 'lib/definitions'

export const FOOTER_TAGS = ['div', 'footer'] as const
export const DEFAULT_FOOTER_BORDER_INTENT: FooterProps['borderIntent'] = 'muted'

export type FooterTag = (typeof FOOTER_TAGS)[number]

type FooterOwnProps = {
  switchAt?: SwitchAt
  borderIntent?: BoxProps['intent']
}

type PropsFromBox<T extends FooterTag = 'div'> = Pick<
  BoxProps<T>,
  | 'tag'
  | 'tagAttrs'
  | 'tagRef'
  | 'padding'
  | 'paddingBlock'
  | 'paddingInline'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
> & {
  children: BoxProps<T>['children']
}

export type FooterProps<T extends FooterTag = 'div'> = PropsFromBox<T> & FooterOwnProps
