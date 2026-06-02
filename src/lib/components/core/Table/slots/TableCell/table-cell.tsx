import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { useTableContext } from '../../TableContext'
import { TableCellProps } from './definitions'

export const TableCell = ({
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
}: TableCellProps) => {
  const context = useTableContext()

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

TableCell.displayName = 'Table.Cell'
