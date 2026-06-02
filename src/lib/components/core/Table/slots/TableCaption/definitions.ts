import { BoxProps } from 'lib/index.core'

export const DEFAULT_TABLE_CAPTION_INTENT: TableCaptionProps['intent'] = 'neutral'

type PropsFromBox = Pick<
  BoxProps<'td'>,
  'tagAttrs' | 'tagRef' | 'intent' | 'color' | 'paddingBlock' | 'paddingInline' | 'textAlign'
> & {
  children: BoxProps<'td'>['children']
}

export type TableCaptionProps = PropsFromBox
