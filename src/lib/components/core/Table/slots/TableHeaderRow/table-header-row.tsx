import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { withPrefix } from 'lib/helpers'
import { useSlots } from 'lib/hooks'

import { TableContext, useTableContext } from '../../TableContext'
import { TableHeaderRowProps } from './types'

export const TableHeaderRow = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  color,
  intent,
  textAlign,
}: TableHeaderRowProps) => {
  const context = useTableContext()

  const slots = useSlots<'Table.HeaderCell'>({
    childrenToVerify: children,
    componentName: 'Table.HeaderRow',
    slotsConfig: [{ name: 'Table.HeaderCell', required: true, allowMultiple: true }],
  })

  if (!slots) return null

  return (
    <TableContext
      value={{
        color: color || context.color,
        intent: intent || context.intent,
        paddingBlock: context.paddingBlock,
        paddingInline: context.paddingInline,
        textAlign: textAlign || context.textAlign,
      }}
    >
      <Box
        tag="tr"
        className={classNames(withPrefix('table-header-row'), tagAttrs?.className)}
        tagAttrs={tagAttrs}
        tagRef={tagRef}
      >
        {slots.slotsByName['Table.HeaderCell']}
      </Box>
    </TableContext>
  )
}

TableHeaderRow.displayName = 'Table.HeaderRow'
