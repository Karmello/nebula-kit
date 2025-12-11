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
  blockSize,
  textAlign,
  color,
  intent,
  paddingBlock,
  paddingInline,
  // own
  colSpan,
  rowSpan,
}: TableHeaderCellProps) => {
  const {
    color: rootColor,
    intent: rootIntent,
    paddingBlock: rootPaddingBlock,
    paddingInline: rootPaddingInline,
  } = useTableContext()

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
      blockSize={blockSize}
      textAlign={textAlign}
      paddingBlock={paddingBlock || rootPaddingBlock}
      paddingInline={paddingInline || rootPaddingInline}
      borderRadius="0px"
    >
      {children}
    </Box>
  )
}

TableHeaderCell.displayName = 'Table.HeaderCell'
