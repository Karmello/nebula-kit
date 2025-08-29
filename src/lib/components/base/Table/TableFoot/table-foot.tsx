import classNames from 'classnames'

import { Box, BoxOwnProps, BoxProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableFootProps = Pick<BoxProps, 'children' | 'className' | 'style'> & Omit<BoxOwnProps, 'display'>

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
