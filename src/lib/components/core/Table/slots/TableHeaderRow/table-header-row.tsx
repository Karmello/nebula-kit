import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { WithSlots } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'

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

  return (
    <WithSlots<'Table.HeaderCell'>
      childrenToVerify={children}
      componentName="Table.HeaderRow"
      slotsConfig={[{ name: 'Table.HeaderCell', required: true, allowMultiple: true }]}
    >
      {({ slotsByName }) => {
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
              tagAttrs={{
                ...tagAttrs,
                className: classNames(withPrefix('table-header-row'), tagAttrs?.className),
              }}
              tagRef={tagRef}
            >
              {slotsByName['Table.HeaderCell']}
            </Box>
          </TableContext>
        )
      }}
    </WithSlots>
  )
}

TableHeaderRow.displayName = 'Table.HeaderRow'
