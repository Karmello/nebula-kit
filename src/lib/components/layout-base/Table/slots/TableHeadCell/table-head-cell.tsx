import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TableHeadCellProps } from './definitions'
import { useTableContext } from '../../TableContext'

export const TableHeadCell = ({
  children,
  tagAttrs,
  tagRef,
  intent,
  colSpan,
  rowSpan,
}: TableHeadCellProps) => {
  const { intent: rootIntent } = useTableContext()

  return (
    <Box
      tag="th"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('table-head-cell'), tagAttrs?.className),
        colSpan,
        rowSpan,
      }}
      tagRef={tagRef}
      variant="solid"
      intent={intent || rootIntent}
      paddingInline={10}
      paddingBlock={5}
    >
      {children}
    </Box>
  )
}

TableHeadCell.displayName = 'Table.HeadCell'
