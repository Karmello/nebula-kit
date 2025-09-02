import classNames from 'classnames'

import { Box, BoxProps, useTableContext } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableCellProps = Pick<BoxProps<'td'>, 'children' | 'elemProps' | 'elemRef'>

export const TableCell = ({ children, elemProps, elemRef }: TableCellProps) => {
  const { variant, intent } = useTableContext()

  return (
    <Box
      elem="td"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('table-cell'), elemProps?.className),
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

TableCell.displayName = 'TableCell'
