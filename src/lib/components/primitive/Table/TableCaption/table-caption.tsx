import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export const TableCaption = ({ className, ...rest }: any) => {
  return <Box as="caption" className={classNames(withPrefix('table-caption'), className)} {...rest} />
}

TableCaption.displayName = 'TableCaption'
