import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export const TableBody = ({ className, ...rest }: any) => {
  return (
    <Box
      as="tbody"
      display="table-row-group"
      className={classNames(withPrefix('table-body'), className)}
      {...rest}
    />
  )
}

TableBody.displayName = 'TableBody'
