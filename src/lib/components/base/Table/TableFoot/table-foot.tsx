import { ComponentPropsWithRef } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableFootProps = ComponentPropsWithRef<'tfoot'> & Omit<BoxOwnProps, 'display'>

export const TableFoot = ({ className, ...rest }: TableFootProps) => {
  return (
    <Box
      {...rest}
      as="tfoot"
      className={classNames(withPrefix('table-foot'), className)}
      style={{
        ...rest.style,
        display: 'table-footer-group',
      }}
    />
  )
}

TableFoot.displayName = 'TableFoot'
