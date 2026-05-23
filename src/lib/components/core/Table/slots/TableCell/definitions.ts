import { BoxProps } from 'lib/components'

type TableCellOwnProps = {
  colSpan?: number
  rowSpan?: number
}

type PropsFromBox = Pick<
  BoxProps<'td'>,
  'tagAttrs' | 'tagRef' | 'minInlineSize' | 'maxInlineSize' | 'blockSize' | 'textAlign' | 'color' | 'intent'
> & {
  children: BoxProps<'td'>['children']
}

export type TableCellProps = PropsFromBox & TableCellOwnProps
