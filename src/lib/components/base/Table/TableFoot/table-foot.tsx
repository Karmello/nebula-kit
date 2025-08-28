import classNames from 'classnames'

import { Box, BoxOwnProps, BoxProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableFootProps = Pick<BoxProps, 'children' | 'className' | 'style'> & Omit<BoxOwnProps, 'display'>

export const TableFoot = ({ className, ...rest }: TableFootProps) => {
  return (
    <Box
      as="tfoot"
      display="table-footer-group"
      className={classNames(withPrefix('table-foot'), className)}
      {...rest}
    />
  )
}

TableFoot.displayName = 'TableFoot'
