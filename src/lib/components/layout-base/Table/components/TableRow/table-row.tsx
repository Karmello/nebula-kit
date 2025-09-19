import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TableRowProps } from './definitions'

export const TableRow = ({ children, elemProps, elemRef }: TableRowProps) => {
  return (
    <Box
      elem="tr"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('table-row'), elemProps?.className),
      }}
      elemRef={elemRef}
    >
      {children}
    </Box>
  )
}

TableRow.displayName = 'TableRow'
