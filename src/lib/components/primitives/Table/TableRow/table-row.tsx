import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export const TableRow = ({ className, ...rest }: any) => {
  return (
    <Box as="tr" display="table-row" className={classNames(withPrefix('table-row'), className)} {...rest} />
  )
}

TableRow.displayName = 'TableRow'
