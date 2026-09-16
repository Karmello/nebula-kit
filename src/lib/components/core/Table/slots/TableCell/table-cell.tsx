import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { withPrefix } from 'lib/helpers'

import { useTableContext } from '../../TableContext'
import { TableCellProps } from './types'

export const TableCell = ({
  // Box
  children,
  elemAttrs,
  elemRef,
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
      elemTag="td"
      className={classNames(withPrefix('table-cell'), elemAttrs?.className)}
      elemAttrs={{
        ...elemAttrs,
        colSpan,
        rowSpan,
      }}
      elemRef={elemRef}
      drawable
      bgMode="filled"
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
