import classNames from 'classnames'

import { Box, BoxProps, useTableContext } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableHeadCellProps = Pick<BoxProps<'th'>, 'children' | 'elemProps' | 'elemRef'>

export const TableHeadCell = ({ children, elemProps, elemRef }: TableHeadCellProps) => {
  const { variant, intent } = useTableContext()

  return (
    <Box
      elem="th"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('table-head-cell'), elemProps?.className),
      }}
      elemRef={elemRef}
      variant={variant}
      intent={intent}
      paddingInline={10}
      paddingBlock={5}
      borderRadius={0}
    >
      {children}
    </Box>
  )
}

TableHeadCell.displayName = 'TableHeadCell'
