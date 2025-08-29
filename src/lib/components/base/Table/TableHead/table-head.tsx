import classNames from 'classnames'

import { Box, BoxOwnProps, BoxProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableHeadProps = Pick<BoxProps, 'children' | 'className' | 'style'> & Omit<BoxOwnProps, 'display'>

export const TableHead = ({ className, ...rest }: TableHeadProps) => {
  return (
    <Box
      {...rest}
      as="thead"
      className={classNames(withPrefix('table-head'), className)}
      style={{
        ...rest.style,
        display: 'table-header-group',
      }}
    />
  )
}

TableHead.displayName = 'TableHead'
