import { ComponentPropsWithRef } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps, useTableContext } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableHeadCellProps = ComponentPropsWithRef<'th'> & Omit<BoxOwnProps, 'display'>

export const TableHeadCell = ({ className, ...rest }: TableHeadCellProps) => {
  const { variant, intent } = useTableContext()

  return (
    <Box
      variant={variant}
      intent={intent}
      paddingInline={10}
      paddingBlock={5}
      borderRadius={0}
      {...rest}
      as="th"
      className={classNames(withPrefix('table-head-cell'), className)}
      style={{
        ...rest.style,
        display: 'table-cell',
      }}
    />
  )
}

TableHeadCell.displayName = 'TableHeadCell'
