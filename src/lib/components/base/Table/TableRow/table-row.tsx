import classNames from 'classnames'

import { Box, BoxProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableRowProps = Pick<BoxProps<'tr'>, 'children' | 'elemProps' | 'elemRef'>

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
