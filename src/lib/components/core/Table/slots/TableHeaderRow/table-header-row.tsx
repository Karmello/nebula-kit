import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { TableHeaderRowProps } from './definitions'
import { TableContext, useTableContext } from '../../TableContext'

export const TableHeaderRow = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // Box
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
