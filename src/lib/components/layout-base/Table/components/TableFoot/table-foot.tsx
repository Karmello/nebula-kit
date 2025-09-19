import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TableFootProps } from './definitions'

export const TableFoot = ({ children, elemProps, elemRef }: TableFootProps) => {
  return (
    <Box
      elem="tfoot"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('table-foot'), elemProps?.className),
      }}
      elemRef={elemRef}
    >
      {children}
    </Box>
  )
}

TableFoot.displayName = 'TableFoot'
