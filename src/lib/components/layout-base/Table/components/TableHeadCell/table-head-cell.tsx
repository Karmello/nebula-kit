import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TableHeadCellProps } from './definitions'
import { useTableContext } from '../../use-table-context'

export const TableHeadCell = ({ children, tagAttrs, tagRef }: TableHeadCellProps) => {
  const { variant, intent } = useTableContext()

  return (
    <Box
      tag="th"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('table-head-cell'), tagAttrs?.className),
      }}
      tagRef={tagRef}
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
