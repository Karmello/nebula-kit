import { BoxProps } from 'lib/components'

export const DEFAULT_TABLE_BODY_INTENT: TableBodyProps['intent'] = 'neutral'

type PropsFromBox = Pick<
  BoxProps<'tbody'>,
  'tagAttrs' | 'tagRef' | 'color' | 'intent' | 'paddingBlock' | 'paddingInline' | 'textAlign'
> & {
  children: BoxProps<'tbody'>['children']
}

export type TableBodyProps = PropsFromBox
