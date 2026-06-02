import { cloneElement } from 'react'
import classNames from 'classnames'

import { WithSlots } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'
import { Box, TableHeaderCellProps, TableRowProps } from 'lib/index.core'

import { TableContext, useTableContext } from '../../TableContext'

export const TableRow = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  color,
  intent,
  textAlign,
}: TableRowProps) => {
  const context = useTableContext()

  return (
    <WithSlots<'Table.HeaderCell' | 'Table.Cell'>
      childrenToVerify={children}
      componentName="Table.Row"
      slotsConfig={[
        { name: 'Table.HeaderCell', allowMultiple: true },
        { name: 'Table.Cell', allowMultiple: true },
      ]}
      someRequired
    >
      {({ allValidSlots }) => {
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
                className: classNames(withPrefix('table-row'), tagAttrs?.className),
              }}
              tagRef={tagRef}
            >
              {allValidSlots.map((slot: any) => {
                if (slot.type.displayName === 'Table.HeaderCell') {
                  return cloneElement<TableHeaderCellProps>(slot, {
                    tagAttrs: { ...slot.props.tagAttrs, scope: 'row' },
                  })
                } else {
                  return slot
                }
              })}
            </Box>
          </TableContext>
        )
      }}
    </WithSlots>
  )
}

TableRow.displayName = 'Table.Row'
