import { cloneElement } from 'react'
import classNames from 'classnames'

import { Box, TableHeaderRowProps } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { TableHeaderProps } from './definitions'

export const TableHeader = ({ children, tagAttrs, tagRef, color, intent }: TableHeaderProps) => {
  return (
    <WithSlots<'Table.HeaderRow'>
      childrenToVerify={children}
      componentName="Table.Header"
      slotsConfig={[{ name: 'Table.HeaderRow', required: true, allowMultiple: true }]}
    >
      {({ slotsByName }) => {
        return (
          <Box
            tag="thead"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('table-header'), tagAttrs?.className),
            }}
            tagRef={tagRef}
          >
            {slotsByName['Table.HeaderRow'].map((slot: any) =>
              cloneElement<TableHeaderRowProps>(slot, {
                color: slot.props.color || color,
                intent: slot.props.intent || intent,
              })
            )}
          </Box>
        )
      }}
    </WithSlots>
  )
}

TableHeader.displayName = 'Table.Header'
