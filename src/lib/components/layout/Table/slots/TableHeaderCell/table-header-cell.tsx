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
  minInlineSize,
  maxInlineSize,
  textAlign,
  color,
  intent,
  // own
  colSpan,
  rowSpan,
}: TableHeaderCellProps) => {
  const { color: rootColor, intent: rootIntent } = useTableContext()

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
      color={color || rootColor}
      intent={intent || rootIntent}
      minInlineSize={minInlineSize}
      maxInlineSize={maxInlineSize}
      textAlign={textAlign}
      paddingInline={20}
      paddingBlock={10}
      borderRadius={0}
    >
      {children}
    </Box>
  )
}

TableHeaderCell.displayName = 'Table.HeaderCell'
