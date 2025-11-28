import { TextProps } from 'lib/components/core/base'

export const DEFAULT_FORM_HINT_INTENT: FormHintProps['intent'] = 'secondary'
export const DEFAULT_FORM_HINT_COLOR: FormHintProps['color'] = 'blue'
export const DEFAULT_FORM_HINT_SCALE: FormHintProps['scale'] = 'compact'

type PropsFromText = Pick<
  TextProps<'span'>,
  | 'bold'
  | 'children'
  | 'color'
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
