import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TableBodyProps } from './definitions'

export const TableBody = ({ children, elemProps, elemRef }: TableBodyProps) => {
  return (
    <Box
      elem="tbody"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('table-body'), elemProps?.className),
      }}
      elemRef={elemRef}
    >
      {children}
    </Box>
  )
}

TableBody.displayName = 'TableBody'
