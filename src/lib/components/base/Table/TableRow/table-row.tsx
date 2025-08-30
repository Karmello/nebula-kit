import { ComponentPropsWithRef } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableRowProps = ComponentPropsWithRef<'tr'> & Omit<BoxOwnProps, 'display'>

export const TableRow = ({ className, ...rest }: TableRowProps) => {
  return (
    <Box
      {...rest}
      as="tr"
      className={classNames(withPrefix('table-row'), className)}
      style={{
        ...rest.style,
        display: 'table-row',
      }}
    />
  )
}

TableRow.displayName = 'TableRow'
