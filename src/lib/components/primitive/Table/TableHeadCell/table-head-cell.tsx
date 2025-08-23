import { ReactNode } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableHeadCellProps = {
  children?: ReactNode
  className?: string
  /** Scope for header cell (column/row) */
  scope?: 'col' | 'row' | 'colgroup' | 'rowgroup'
  /** Text alignment */
  align?: 'start' | 'center' | 'end'
}

export const TableHeadCell = ({ className, scope = 'col', align = 'start', ...rest }: TableHeadCellProps) => {
  return (
    <Box
      as="th"
      className={classNames(withPrefix('table-head-cell'), className)}
      scope={scope}
      data-table-head-cell-align={align}
      {...rest}
    />
  )
}

TableHeadCell.displayName = 'TableHeadCell'
