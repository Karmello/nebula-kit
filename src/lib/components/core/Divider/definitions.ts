import { BoxProps } from 'lib/components/core/Box/definitions'

export const DEFAULT_DIVIDER_INTENT: DividerProps['intent'] = 'muted'
export const DEFAULT_DIVIDER_MARGIN_BLOCK: DividerProps['marginBlock'] = '3px'

type PropsFromBox = Pick<
  BoxProps<'hr'>,
  'tagAttrs' | 'tagRef' | 'color' | 'intent' | 'marginBlock' | 'marginTop' | 'marginBottom' | 'elevated' | 'surface'
>

export type DividerProps = PropsFromBox
