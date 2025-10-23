import { ScaleValue } from 'lib/definitions'
import { HtmlTagProps } from 'lib/components'
import { BoxIntent, BoxProps } from 'lib/components/base/Box/definitions'

export const DEFAULT_DIVIDER_INTENT: BoxIntent = 'tertiary'

type DividerOwnProps = {
  blockSize?: ScaleValue | string
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'hr'>, 'tagAttrs' | 'tagRef'>

type PropsFromBox = Pick<BoxProps<'hr'>, 'intent'>

export type DividerProps = PropsFromHtmlTag & PropsFromBox & DividerOwnProps
