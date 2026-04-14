import { HtmlTagProps } from 'lib/components'
import { BoxProps } from 'lib/components/core/base/Box/definitions'

export const DEFAULT_DIVIDER_INTENT: DividerProps['intent'] = 'muted'
export const DEFAULT_DIVIDER_MARGIN_BLOCK: DividerProps['marginBlock'] = '3px'
export const DEFAULT_DIVIDER_OPACITY: DividerProps['opacity'] = '0.5'
export const DEFAULT_DIVIDER_SURFACE: DividerProps['surface'] = 'elevated'

type PropsFromHtmlTag = Pick<HtmlTagProps<'hr'>, 'tagAttrs' | 'tagRef'>

type PropsFromBox = Pick<
  BoxProps<'hr'>,
  'color' | 'intent' | 'marginBlock' | 'marginTop' | 'marginBottom' | 'opacity' | 'surface'
>

export type DividerProps = PropsFromHtmlTag & PropsFromBox
