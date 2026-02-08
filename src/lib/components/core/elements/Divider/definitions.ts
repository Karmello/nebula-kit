import { HtmlTagProps } from 'lib/components'
import { BoxProps } from 'lib/components/core/base/Box/definitions'

export const DEFAULT_DIVIDER_INTENT: DividerProps['intent'] = 'tertiary'
export const DEFAULT_DIVIDER_MARGIN_BLOCK: DividerProps['marginBlock'] = '3px'

type PropsFromHtmlTag = Pick<HtmlTagProps<'hr'>, 'tagAttrs' | 'tagRef'>

type PropsFromBox = Pick<
  BoxProps<'hr'>,
  'color' | 'intent' | 'marginBlock' | 'marginTop' | 'marginBottom' | 'opacity'
>

export type DividerProps = PropsFromHtmlTag & PropsFromBox
