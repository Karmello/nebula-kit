import { cloneElement } from 'react'
import classNames from 'classnames'

import { Box, TableHeaderCellProps } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { TableHeaderRowProps } from './definitions'

export const TableHeaderRow = ({ children, tagAttrs, tagRef, intent }: TableHeaderRowProps) => {
  return (
    <WithSlots<'Table.HeaderCell'>
      childrenToVerify={children}
      componentName="Table.HeaderRow"
      slotsConfig={[{ name: 'Table.HeaderCell', required: true, allowMultiple: true }]}
    >
      {({ slotsByName }) => {
        return (
          <Box
            tag="tr"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('table-header-row'), tagAttrs?.className),
            }}
            tagRef={tagRef}
          >
            {slotsByName['Table.HeaderCell'].map((slot: any) =>
              cloneElement<TableHeaderCellProps>(slot, {
                intent: slot.props.intent || intent,
                tagAttrs: { scope: 'col' },
              })
            )}
          </Box>
        )
      }}
    </WithSlots>
  )
}

TableHeaderRow.displayName = 'Table.HeaderRow'
