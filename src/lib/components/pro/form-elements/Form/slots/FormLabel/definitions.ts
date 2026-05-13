import { TextProps, WithIconProps } from 'lib/components'

export const DEFAULT_FORM_LABEL_INTENT: FormLabelProps['intent'] = 'neutral'

type PropsFromText = Pick<
  TextProps<'label'>,
  'bold' | 'children' | 'color' | 'iconName' | 'intent' | 'noWrap' | 'tagAttrs' | 'tagRef' | 'textAlign' | 'truncate'
>

type PropsFromWithIcon = Pick<WithIconProps, 'iconPlacement'>

export type FormLabelProps = PropsFromText & PropsFromWithIcon
