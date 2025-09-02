import classNames from 'classnames'

import { Box, BoxProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableBodyProps = Pick<BoxProps<'tbody'>, 'children' | 'elemProps' | 'elemRef'>

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
