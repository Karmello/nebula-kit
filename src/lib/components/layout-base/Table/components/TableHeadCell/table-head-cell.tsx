import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TableHeadCellProps } from './definitions'
import { useTableContext } from '../../use-table-context'

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
