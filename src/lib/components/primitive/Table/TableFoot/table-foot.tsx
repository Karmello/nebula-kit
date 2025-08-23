import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export const TableFoot = ({ className, ...rest }: any) => {
  return <Box as="tfoot" className={classNames(withPrefix('table-foot'), className)} {...rest} />
}

TableFoot.displayName = 'TableFoot'
