import { HtmlTagProps } from 'lib/components'
import { BoxIntent, BoxProps } from 'lib/components/base/Box/definitions'
import { NebkitBorderWidthSize } from 'lib/components/utility/NebkitProvider/definitions'

export const DEFAULT_DIVIDER_INTENT: BoxIntent = 'tertiary'

type DividerOwnProps = {
  size?: NebkitBorderWidthSize
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'hr'>, 'tagAttrs' | 'tagRef'>

type PropsFromBox = Pick<BoxProps<'hr'>, 'intent'>

export type DividerProps = PropsFromHtmlTag & PropsFromBox & DividerOwnProps
