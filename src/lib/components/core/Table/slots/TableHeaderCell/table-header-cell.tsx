import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { Box, TableHeaderCellProps } from 'lib/index.core'

import { useTableContext } from '../../TableContext'

export const TableHeaderCell = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  minInlineSize,
  maxInlineSize,
  blockSize,
  textAlign,
  color,
  intent,
  // own
  colSpan,
  rowSpan,
}: TableHeaderCellProps) => {
  const context = useTableContext()

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
      drawable
      variant="solid"
      color={color || context.color}
      intent={intent || context.intent}
      minInlineSize={minInlineSize}
      maxInlineSize={maxInlineSize}
      blockSize={blockSize}
      textAlign={textAlign || context.textAlign}
      paddingBlock={context.paddingBlock}
      paddingInline={context.paddingInline}
      borderRadius="0px"
    >
      {children}
    </Box>
  )
}

TableHeaderCell.displayName = 'Table.HeaderCell'
