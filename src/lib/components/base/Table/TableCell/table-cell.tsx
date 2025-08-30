import { ComponentPropsWithRef } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps, useTableContext } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableCellProps = ComponentPropsWithRef<'td'> & Omit<BoxOwnProps, 'display'>

export const TableCell = ({ className, ...rest }: TableCellProps) => {
  const { variant, intent } = useTableContext()

  return (
    <Box
      variant={variant}
      intent={intent}
      p={5}
      {...rest}
      as="td"
      className={classNames(withPrefix('table-cell'), className)}
      style={{
        ...rest.style,
        display: 'table-cell',
      }}
    />
  )
}

TableCell.displayName = 'TableCell'
