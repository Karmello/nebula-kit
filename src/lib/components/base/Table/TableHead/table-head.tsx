import classNames from 'classnames'

import { Box, BoxProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableHeadProps = Pick<BoxProps<'thead'>, 'children' | 'elemProps' | 'elemRef'>

export const TableHead = ({ children, elemProps, elemRef }: TableHeadProps) => {
  return (
    <Box
      elem="thead"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('table-head'), elemProps?.className),
      }}
      elemRef={elemRef}
    >
      {children}
    </Box>
  )
}

TableHead.displayName = 'TableHead'
