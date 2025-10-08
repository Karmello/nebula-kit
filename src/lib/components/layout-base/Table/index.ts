import { Table as TableBase } from './table'

import {
  TableBody,
  TableCaption,
  TableCell,
  TableFoot,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableRow,
} from './slots'

export const Table = Object.assign(TableBase, {
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Foot: TableFoot,
  Head: TableHead,
  HeadCell: TableHeadCell,
  HeadRow: TableHeadRow,
  Row: TableRow,
})

export { type TableProps } from './definitions'

export type {
  TableBodyProps,
  TableCaptionProps,
  TableCellProps,
  TableFootProps,
  TableHeadProps,
  TableHeadCellProps,
  TableHeadRowProps,
  TableRowProps,
} from './slots'
