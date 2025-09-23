import { ScaleValue } from 'lib/definitions'
import { BoxProps, HtmlTagProps } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'

export const DEFAULT_DIVIDER_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_DIVIDER_THICKNESS = 1

export type DividerOwnProps = {
  thickness?: ScaleValue | string
}

type PropsFromHtmlTag = {
  tagAttrs?: HtmlTagProps<'hr'>['tagAttrs']
  tagRef?: HtmlTagProps<'hr'>['tagRef']
}

type PropsFromBox = {
  intent?: BoxIntent
}

export type DividerProps = PropsFromHtmlTag & PropsFromBox & DividerOwnProps
