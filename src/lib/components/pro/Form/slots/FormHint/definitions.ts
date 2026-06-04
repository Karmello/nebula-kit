import { TextProps, TitleProps } from 'lib/index.core'

export const DEFAULT_FORM_HINT_INTENT: FormHintProps['intent'] = 'secondary'
export const DEFAULT_FORM_HINT_COLOR: FormHintProps['color'] = 'blue'

type PropsFromText = Pick<
  TextProps<'span'>,
  'bold' | 'children' | 'color' | 'intent' | 'noWrap' | 'tagAttrs' | 'tagRef' | 'truncate'
>

export type FormHintProps = PropsFromText & Pick<TitleProps, 'iconName' | 'iconPlacement'>
