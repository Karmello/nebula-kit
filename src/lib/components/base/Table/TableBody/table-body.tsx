import { ComponentPropsWithRef } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableBodyProps = ComponentPropsWithRef<'tbody'> & Omit<BoxOwnProps, 'display'>

export const TableBody = ({ className, ...rest }: TableBodyProps) => {
  return (
    <Box
      {...rest}
      as="tbody"
      className={classNames(withPrefix('table-body'), className)}
      style={{
        ...rest.style,
        display: 'table-row-group',
      }}
    />
  )
}

TableBody.displayName = 'TableBody'
