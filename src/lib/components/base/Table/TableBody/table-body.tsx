import classNames from 'classnames'

import { Box, BoxOwnProps, BoxProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableBodyProps = Pick<BoxProps, 'children' | 'className' | 'style'> & Omit<BoxOwnProps, 'display'>

export const TableBody = ({ className, ...rest }: TableBodyProps) => {
  return (
    <Box
      {...rest}
      as="tbody"
      display="table-row-group"
      className={classNames(withPrefix('table-body'), className)}
    />
  )
}

TableBody.displayName = 'TableBody'
