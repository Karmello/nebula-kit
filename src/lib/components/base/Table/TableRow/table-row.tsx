import classNames from 'classnames'

import { Box, BoxOwnProps, BoxProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableRowProps = Pick<BoxProps, 'children' | 'className' | 'style'> & Omit<BoxOwnProps, 'display'>

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
