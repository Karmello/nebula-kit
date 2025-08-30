import { ComponentPropsWithRef } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableHeadProps = ComponentPropsWithRef<'thead'> & Omit<BoxOwnProps, 'display'>

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
