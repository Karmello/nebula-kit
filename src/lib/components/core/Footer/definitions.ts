import { FooterTag, SwitchAt } from 'lib/types'

import { BoxProps } from '../Box'

export const DEFAULT_FOOTER_BORDER_INTENT: FooterProps['borderIntent'] = 'muted'

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
