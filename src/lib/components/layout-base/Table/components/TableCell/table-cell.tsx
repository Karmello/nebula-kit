import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TableCellProps } from './definitions'
import { useTableContext } from '../../use-table-context'

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
