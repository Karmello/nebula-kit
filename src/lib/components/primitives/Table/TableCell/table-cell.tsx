import { ReactNode } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps, useTableContext } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableCellOwnProps = Pick<BoxOwnProps, 'textAlign'> & {
  children?: ReactNode
  className?: string
}

export const TableCell = ({ className, ...rest }: TableCellOwnProps) => {
  const { variant, intent } = useTableContext()

  return (
    <Box
      as="td"
      display="table-cell"
      className={classNames(withPrefix('table-cell'), className)}
      variant={variant}
      intent={intent}
      {...rest}
    />
  )
}

TableCell.displayName = 'TableCell'
