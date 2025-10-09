import { cloneElement } from 'react'
import classNames from 'classnames'

import { Box, TableRowProps } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { TableBodyProps } from './definitions'

export const TableBody = ({ children, tagAttrs, tagRef, intent }: TableBodyProps) => {
  return (
    <WithSlots<'Table.Row'>
      childrenToVerify={children}
      componentName="Table.Body"
      slotsConfig={[{ name: 'Table.Row', required: true, allowMultiple: true }]}
    >
      {({ slots }) => {
        return (
          <Box
            tag="tbody"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('table-body'), tagAttrs?.className),
            }}
            tagRef={tagRef}
          >
            {slots['Table.Row'].map((slot: any) =>
              cloneElement<TableRowProps>(slot, { intent: slot.props.intent || intent })
            )}
          </Box>
        )
      }}
    </WithSlots>
  )
}

TableBody.displayName = 'Table.Body'
