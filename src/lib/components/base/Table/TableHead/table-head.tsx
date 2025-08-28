import classNames from 'classnames'

import { Box, BoxOwnProps, BoxProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableHeadProps = Pick<BoxProps, 'children' | 'className' | 'style'> & Omit<BoxOwnProps, 'display'>

export const TableHead = ({ className, ...rest }: TableHeadProps) => {
  return (
    <Box
      {...rest}
      as="thead"
      display="table-header-group"
      className={classNames(withPrefix('table-head'), className)}
    />
  )
}

TableHead.displayName = 'TableHead'
