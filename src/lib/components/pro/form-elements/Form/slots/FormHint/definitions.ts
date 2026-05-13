import { TextProps, WithIconProps } from 'lib/components'

export const DEFAULT_FORM_HINT_INTENT: FormHintProps['intent'] = 'secondary'
export const DEFAULT_FORM_HINT_COLOR: FormHintProps['color'] = 'blue'

type PropsFromText = Pick<
  TextProps<'span'>,
  'bold' | 'children' | 'color' | 'intent' | 'noWrap' | 'tagAttrs' | 'tagRef' | 'textAlign' | 'truncate'
>

type PropsFromWithIcon = Pick<WithIconProps, 'iconName' | 'iconPlacement'>

export type FormHintProps = PropsFromText & PropsFromWithIcon
