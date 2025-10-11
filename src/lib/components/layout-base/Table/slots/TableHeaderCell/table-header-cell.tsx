import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TableHeaderCellProps } from './definitions'
import { useTableContext } from '../../TableContext'

export const TableHeaderCell = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // Box
  inlineSize,
  textAlign,
  intent,
  // own
  colSpan,
  rowSpan,
}: TableHeaderCellProps) => {
  const { intent: rootIntent } = useTableContext()

  return (
    <Box
      tag="th"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('table-header-cell'), tagAttrs?.className),
        colSpan,
        rowSpan,
      }}
      tagRef={tagRef}
      variant="solid"
      intent={intent || rootIntent}
      inlineSize={inlineSize}
      textAlign={textAlign}
      paddingInline={10}
      paddingBlock={5}
      borderRadius={0}
    >
      {children}
    </Box>
  )
}

TableHeaderCell.displayName = 'Table.HeaderCell'
