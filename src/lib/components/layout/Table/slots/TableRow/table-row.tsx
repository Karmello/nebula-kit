import { cloneElement } from 'react'
import classNames from 'classnames'

import { Box, TableCellProps, TableHeaderCellProps } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { TableRowProps } from './definitions'

export const TableRow = ({ children, tagAttrs, tagRef, color, intent }: TableRowProps) => {
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
                  tagAttrs: { scope: 'row' },
                  color: slot.props.color || color,
                  intent: slot.props.intent || intent,
                })
              } else {
                return cloneElement<TableCellProps>(slot, {
                  color: slot.props.color || color,
                  intent: slot.props.intent || intent,
                })
              }
            })}
          </Box>
        )
      }}
    </WithSlots>
  )
}

TableRow.displayName = 'Table.Row'
