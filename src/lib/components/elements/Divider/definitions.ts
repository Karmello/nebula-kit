import { ScaleValue } from 'lib/definitions'
import { HtmlTagProps } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'

export const DEFAULT_DIVIDER_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_DIVIDER_THICKNESS = 1

type DividerOwnProps = {
  intent?: BoxIntent
  thickness?: ScaleValue | string
}

type PropsFromHtmlTag = {
  tagAttrs?: HtmlTagProps<'hr'>['tagAttrs']
  tagRef?: HtmlTagProps<'hr'>['tagRef']
}

export type DividerProps = PropsFromHtmlTag & DividerOwnProps
