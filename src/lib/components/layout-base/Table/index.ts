import { Table as TableBase } from './table'

import {
  TableHead,
  TableBody,
  TableRow,
  TableFoot,
  TableHeadCell,
  TableCell,
  TableCaption,
} from './components'

export const Table = Object.assign(TableBase, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Foot: TableFoot,
  HeadCell: TableHeadCell,
  Cell: TableCell,
  Caption: TableCaption,
})

export { type TableProps } from './definitions'

export type {
  TableBodyProps,
  TableCaptionProps,
  TableCellProps,
  TableFootProps,
  TableHeadProps,
  TableHeadCellProps,
  TableRowProps,
} from './components'
