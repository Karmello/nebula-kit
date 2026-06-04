import { TextProps, TitleProps } from 'lib/index.core'

export const DEFAULT_FORM_LABEL_INTENT: FormLabelProps['intent'] = 'neutral'

type PropsFromText = Pick<
  TextProps<'label'>,
  'bold' | 'children' | 'color' | 'intent' | 'noWrap' | 'tagAttrs' | 'tagRef' | 'truncate'
>

export type FormLabelProps = PropsFromText & Pick<TitleProps, 'iconName' | 'iconPlacement'>
