import { TextProps } from 'lib/components/base'

export const DEFAULT_FORM_LABEL_INTENT: FormLabelProps['intent'] = 'neutral'

type PropsFromText = Pick<
  TextProps<'label'>,
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

export type FormLabelProps = PropsFromText
