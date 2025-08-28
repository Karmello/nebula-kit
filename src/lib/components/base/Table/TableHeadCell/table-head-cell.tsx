import classNames from 'classnames'

import { Box, BoxOwnProps, BoxProps, useTableContext } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableHeadCellProps = Pick<BoxProps, 'children' | 'className' | 'style'> &
  Omit<BoxOwnProps, 'display'>

export const TableHeadCell = ({ className, ...rest }: TableHeadCellProps) => {
  const { variant, intent } = useTableContext()

  return (
    <Box
      variant={variant}
      intent={intent}
      p={5}
      {...rest}
      as="th"
      display="table-cell"
      className={classNames(withPrefix('table-head-cell'), className)}
    />
  )
}

TableHeadCell.displayName = 'TableHeadCell'
