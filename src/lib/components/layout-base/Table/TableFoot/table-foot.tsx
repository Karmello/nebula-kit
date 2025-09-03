import classNames from 'classnames'

import { Box, BoxProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableFootProps = Pick<BoxProps<'tfoot'>, 'children' | 'elemProps' | 'elemRef'>

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
