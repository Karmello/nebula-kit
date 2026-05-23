import { BoxProps } from 'lib/components'

export const DEFAULT_TABLE_FOOTER_INTENT: TableFooterProps['intent'] = 'neutral'

type PropsFromBox = Pick<
  BoxProps<'tfoot'>,
  'tagAttrs' | 'tagRef' | 'color' | 'intent' | 'paddingBlock' | 'paddingInline' | 'textAlign'
> & {
  children: BoxProps<'tfoot'>['children']
}

export type TableFooterProps = PropsFromBox
