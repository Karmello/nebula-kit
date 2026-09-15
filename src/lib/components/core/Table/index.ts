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
import { Table as TableBase } from './table'

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

export * from './constants'
export * from './slots'
export * from './types'
