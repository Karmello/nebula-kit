import { BoxProps } from '../Box'

export const DEFAULT_DIVIDER_INTENT: DividerProps['intent'] = 'muted'
export const DEFAULT_DIVIDER_MARGIN_BLOCK: DividerProps['marginBlock'] = '3px'

type PropsFromBox = {
  tagAttrs?: BoxProps<'hr'>['tagAttrs']
  tagRef?: BoxProps<'hr'>['tagRef']
  color?: BoxProps<'hr'>['color']
  intent?: BoxProps<'hr'>['intent']
  marginBlock?: BoxProps<'hr'>['marginBlock']
  marginTop?: BoxProps<'hr'>['marginTop']
  marginBottom?: BoxProps<'hr'>['marginBottom']
  elevated?: BoxProps<'hr'>['elevated']
}

export type DividerProps = PropsFromBox
