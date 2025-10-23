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
  textAlign,
  intent = 'neutral',
  // own
  colSpan,
  rowSpan,
}: TableCellProps) => {
  const { intent: rootIntent } = useTableContext()

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
      intent={intent || rootIntent}
      minInlineSize={minInlineSize}
      maxInlineSize={maxInlineSize}
      textAlign={textAlign}
      paddingInline={10}
      paddingBlock={5}
      borderRadius={0}
    >
      {children}
    </Box>
  )
}

TableCell.displayName = 'Table.Cell'
