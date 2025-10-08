import { Table as TableBase } from './table'

import {
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHeadCell,
  TableHeader,
  TableHeaderRow,
  TableRow,
} from './slots'

export const Table = Object.assign(TableBase, {
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Footer: TableFooter,
  HeadCell: TableHeadCell,
  Header: TableHeader,
  HeaderRow: TableHeaderRow,
  Row: TableRow,
})

export { type TableProps } from './definitions'

export type {
  TableBodyProps,
  TableCaptionProps,
  TableCellProps,
  TableFooterProps,
  TableHeadCellProps,
  TableHeaderProps,
  TableHeaderRowProps,
  TableRowProps,
} from './slots'
