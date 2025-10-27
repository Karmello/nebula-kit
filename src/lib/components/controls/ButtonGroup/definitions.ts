import { ButtonProps, FlexProps, HtmlTagProps } from 'lib/components'
import { RespValue } from 'lib/definitions'

import { ButtonTag } from '../Button/definitions'

export const DEFAULT_BUTTON_GROUP_GAP = 3
export const BUTTON_GROUP_DIRECTIONS = ['row', 'column'] as const
export const BUTTON_GROUP_TAGS = ['div', 'nav', 'section', 'aside', 'form', 'fieldset'] as const

export type ButtonGroupTag = (typeof BUTTON_GROUP_TAGS)[number]
export type ButtonGroupDirection = (typeof BUTTON_GROUP_DIRECTIONS)[number]

type ButtonGroupOwnProps = {
  direction?: RespValue<ButtonGroupDirection>
  stretch?: RespValue<boolean>
  attached?: boolean
}

type PropsFromHtmlTag<T extends ButtonGroupTag = 'div'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

type PropsFromFlex<T extends ButtonGroupTag = 'div'> = Pick<FlexProps<T>, 'gap'>

type PropsFromButton = Pick<ButtonProps<ButtonTag>, 'variant' | 'intent' | 'size'>

export type ButtonGroupProps<T extends ButtonGroupTag = 'div'> = PropsFromHtmlTag<T> &
  PropsFromFlex<T> &
  PropsFromButton &
  ButtonGroupOwnProps
