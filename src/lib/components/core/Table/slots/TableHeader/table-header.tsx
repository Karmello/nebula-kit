import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { withPrefix } from 'lib/helpers'
import { useSlots } from 'lib/hooks'

import { TableContext, useTableContext } from '../../TableContext'
import { TableHeaderProps } from './types'

export const TableHeader = ({
  // Box
  children,
  elemAttrs,
  elemRef,
  color,
  intent,
  paddingBlock,
  paddingInline,
  textAlign,
}: TableHeaderProps) => {
  const context = useTableContext()

  const slots = useSlots<'Table.HeaderRow'>({
    childrenToVerify: children,
    componentName: 'Table.Header',
    slotsConfig: [{ name: 'Table.HeaderRow', required: true, allowMultiple: true }],
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
        elemTag="thead"
        className={classNames(withPrefix('table-header'), elemAttrs?.className)}
        elemAttrs={elemAttrs}
        elemRef={elemRef}
      >
        {slots.slotsByName['Table.HeaderRow']}
      </Box>
    </TableContext>
  )
}

TableHeader.displayName = 'Table.Header'
