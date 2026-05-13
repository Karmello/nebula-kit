import { TextProps, WithIconProps } from 'lib/components'

export const DEFAULT_FORM_HINT_INTENT: FormHintProps['intent'] = 'secondary'
export const DEFAULT_FORM_HINT_COLOR: FormHintProps['color'] = 'blue'

type PropsFromText = Pick<
  TextProps<'span'>,
  'bold' | 'children' | 'color' | 'iconName' | 'intent' | 'noWrap' | 'tagAttrs' | 'tagRef' | 'textAlign' | 'truncate'
>

type PropsFromWithIcon = Pick<WithIconProps, 'iconPlacement'>

export type FormHintProps = PropsFromText & PropsFromWithIcon
