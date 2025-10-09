import { cloneElement } from 'react'
import classNames from 'classnames'

import { Box, TableRowProps } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { TableFooterProps } from './definitions'

export const TableFooter = ({ children, tagAttrs, tagRef, intent }: TableFooterProps) => {
  return (
    <WithSlots<'Table.Row'>
      childrenToVerify={children}
      componentName="Table.Footer"
      slotsConfig={[{ name: 'Table.Row', required: true, allowMultiple: true }]}
    >
      {({ slots }) => {
        return (
          <Box
            tag="tfoot"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('table-footer'), tagAttrs?.className),
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

TableFooter.displayName = 'Table.Footer'
