import { ReactNode } from 'react'
import classNames from 'classnames'

import { Box, useTableContext } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableCellProps = {
  children?: ReactNode
  className?: string
  /** Text alignment */
  align?: 'start' | 'center' | 'end'
}

export const TableCell = ({ align = 'start', className, ...rest }: TableCellProps) => {
  const { variant, intent } = useTableContext()

  return (
    <Box
      as="td"
      className={classNames(withPrefix('table-cell'), className)}
      data-table-cell-align={align}
      variant={variant}
      intent={intent}
      {...rest}
    />
  )
}

TableCell.displayName = 'TableCell'
