import { BoxProps } from 'lib/index.core'

type TableHeaderCellOwnProps = {
  colSpan?: number
  rowSpan?: number
}

type PropsFromBox = Pick<
  BoxProps<'th'>,
  'tagAttrs' | 'tagRef' | 'minInlineSize' | 'maxInlineSize' | 'blockSize' | 'textAlign' | 'color' | 'intent'
> & {
  children: BoxProps<'th'>['children']
}

export type TableHeaderCellProps = PropsFromBox & TableHeaderCellOwnProps
