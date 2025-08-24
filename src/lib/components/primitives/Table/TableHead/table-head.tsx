import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export const TableHead = ({ className, ...rest }: any) => {
  return <Box as="thead" className={classNames(withPrefix('table-head'), className)} {...rest} />
}

TableHead.displayName = 'TableHead'
