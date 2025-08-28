import { Table as TableBase } from './table'

import { TableHead } from './TableHead'
import { TableBody } from './TableBody'
import { TableRow } from './TableRow'
import { TableFoot } from './TableFoot'
import { TableHeadCell } from './TableHeadCell'
import { TableCell } from './TableCell'
import { TableCaption } from './TableCaption'

export const Table = Object.assign(TableBase, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Foot: TableFoot,
  HeadCell: TableHeadCell,
  Cell: TableCell,
  Caption: TableCaption,
})

export * from './table'
export * from './use-table-context'
