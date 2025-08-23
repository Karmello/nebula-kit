import { ReactNode } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableCellProps = {
  children?: ReactNode
  className?: string
  /** Text alignment */
  align?: 'start' | 'center' | 'end'
}

export const TableCell = ({ align = 'start', className, ...rest }: TableCellProps) => {
  return (
    <Box
      as="td"
      className={classNames(withPrefix('table-cell'), className)}
      data-table-cell-align={align}
      {...rest}
    />
  )
}

TableCell.displayName = 'TableCell'
