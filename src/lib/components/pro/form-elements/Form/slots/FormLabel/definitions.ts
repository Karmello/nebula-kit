import { TextProps, WithIconProps } from 'lib/components'

export const DEFAULT_FORM_LABEL_INTENT: FormLabelProps['intent'] = 'neutral'

type PropsFromText = Pick<
  TextProps<'label'>,
  'bold' | 'children' | 'color' | 'intent' | 'noWrap' | 'tagAttrs' | 'tagRef' | 'truncate'
>

type PropsFromWithIcon = Pick<WithIconProps, 'iconName' | 'iconPlacement'>

export type FormLabelProps = PropsFromText & PropsFromWithIcon
