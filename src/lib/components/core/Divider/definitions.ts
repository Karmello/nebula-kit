import { BoxProps } from '../Box'

export const DEFAULT_DIVIDER_INTENT: DividerProps['intent'] = 'muted'
export const DEFAULT_DIVIDER_MARGIN_BLOCK: DividerProps['marginBlock'] = '3px'

type PropsFromBox = Pick<
  BoxProps<'hr'>,
  'tagAttrs' | 'tagRef' | 'color' | 'intent' | 'marginBlock' | 'marginTop' | 'marginBottom' | 'elevated'
>

export type DividerProps = PropsFromBox
