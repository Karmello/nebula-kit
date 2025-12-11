import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TableCellProps } from './definitions'
import { useTableContext } from '../../TableContext'

export const TableCell = ({
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
  intent = 'neutral',
  paddingBlock,
  paddingInline,
  // own
  colSpan,
  rowSpan,
}: TableCellProps) => {
  const {
    color: rootColor,
    intent: rootIntent,
    paddingBlock: rootPaddingBlock,
    paddingInline: rootPaddingInline,
  } = useTableContext()

  return (
    <Box
      tag="td"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('table-cell'), tagAttrs?.className),
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
    >
      {children}
    </Box>
  )
}

TableCell.displayName = 'Table.Cell'
