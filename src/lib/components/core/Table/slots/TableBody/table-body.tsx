import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { withPrefix } from 'lib/helpers'
import { useSlots } from 'lib/hooks'

import { TableContext, useTableContext } from '../../TableContext'
import { DEFAULT_TABLE_BODY_INTENT } from './constants'
import { TableBodyProps } from './types'

export const TableBody = ({
  children,
  tagAttrs,
  tagRef,
  color,
  intent = DEFAULT_TABLE_BODY_INTENT,
  paddingBlock,
  paddingInline,
  textAlign,
}: TableBodyProps) => {
  const context = useTableContext()

  const slots = useSlots<'Table.Row'>({
    childrenToVerify: children,
    componentName: 'Table.Body',
    slotsConfig: [{ name: 'Table.Row', required: true, allowMultiple: true }],
  })

  if (!slots) return null

  return (
    <TableContext
      value={{
        color: color || context.color,
        intent: intent || context.intent,
        paddingBlock: paddingBlock || context.paddingBlock,
        paddingInline: paddingInline || context.paddingInline,
        textAlign: textAlign || context.textAlign,
      }}
    >
      <Box
        tag="tbody"
        tagAttrs={{
          ...tagAttrs,
          className: classNames(withPrefix('table-body'), tagAttrs?.className),
        }}
        tagRef={tagRef}
      >
        {slots.slotsByName['Table.Row']}
      </Box>
    </TableContext>
  )
}

TableBody.displayName = 'Table.Body'
