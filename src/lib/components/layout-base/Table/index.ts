import { Table as TableBase } from './table'

import {
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
} from './slots'

export const Table = Object.assign(TableBase, {
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Footer: TableFooter,
  Header: TableHeader,
  HeaderCell: TableHeaderCell,
  HeaderRow: TableHeaderRow,
  Row: TableRow,
})

export { type TableProps } from './definitions'

export type {
  TableBodyProps,
  TableCaptionProps,
  TableCellProps,
  TableFooterProps,
  TableHeaderProps,
  TableHeaderCellProps,
  TableHeaderRowProps,
  TableRowProps,
} from './slots'
