import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'

import { TableContext, useTableContext } from '../../TableContext'
import { DEFAULT_TABLE_BODY_INTENT, TableBodyProps } from './definitions'

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

  return (
    <WithSlots<'Table.Row'>
      childrenToVerify={children}
      componentName="Table.Body"
      slotsConfig={[{ name: 'Table.Row', required: true, allowMultiple: true }]}
    >
      {({ slotsByName }) => {
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
              {slotsByName['Table.Row']}
            </Box>
          </TableContext>
        )
      }}
    </WithSlots>
  )
}

TableBody.displayName = 'Table.Body'
