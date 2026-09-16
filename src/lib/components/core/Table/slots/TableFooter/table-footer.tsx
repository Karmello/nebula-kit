import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { withPrefix } from 'lib/helpers'
import { useSlots } from 'lib/hooks'

import { TableContext, useTableContext } from '../../TableContext'
import { DEFAULT_TABLE_FOOTER_INTENT } from './constants'
import { TableFooterProps } from './types'

export const TableFooter = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  color,
  intent = DEFAULT_TABLE_FOOTER_INTENT,
  paddingBlock,
  paddingInline,
  textAlign,
}: TableFooterProps) => {
  const context = useTableContext()

  const slots = useSlots<'Table.Row'>({
    childrenToVerify: children,
    componentName: 'Table.Footer',
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
        tag="tfoot"
        className={classNames(withPrefix('table-footer'), tagAttrs?.className)}
        tagAttrs={tagAttrs}
        tagRef={tagRef}
      >
        {slots.slotsByName['Table.Row']}
      </Box>
    </TableContext>
  )
}

TableFooter.displayName = 'Table.Footer'
