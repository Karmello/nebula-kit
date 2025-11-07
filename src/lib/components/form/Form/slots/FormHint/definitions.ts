import { TextProps } from 'lib/components/base'

export const DEFAULT_FORM_HINT_INTENT: FormHintProps['intent'] = 'info'
export const DEFAULT_FORM_HINT_SCALE: FormHintProps['scale'] = 'compact'

type PropsFromText = Pick<
  TextProps<'span'>,
  | 'bold'
  | 'children'
  | 'iconName'
  | 'iconPosition'
  | 'intent'
  | 'noWrap'
  | 'scale'
  | 'tagAttrs'
  | 'tagRef'
  | 'textAlign'
  | 'truncate'
>

export type FormHintProps = PropsFromText
