import { cloneElement } from 'react'
import classNames from 'classnames'

import { Box, TableRowProps } from 'lib/components'
import { WithSlots } from 'lib/components/core/internal'
import { withPrefix } from 'lib/helpers'

import { TableFooterProps } from './definitions'

export const TableFooter = ({
  children,
  tagAttrs,
  tagRef,
  color,
  intent,
  paddingBlock,
  paddingInline,
}: TableFooterProps) => {
  return (
    <WithSlots<'Table.Row'>
      childrenToVerify={children}
      componentName="Table.Footer"
      slotsConfig={[{ name: 'Table.Row', required: true, allowMultiple: true }]}
    >
      {({ slotsByName }) => {
        return (
          <Box
            tag="tfoot"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('table-footer'), tagAttrs?.className),
            }}
            tagRef={tagRef}
          >
            {slotsByName['Table.Row'].map((slot: any) =>
              cloneElement<TableRowProps>(slot, {
                color: slot.props.color || color,
                intent: slot.props.intent || intent,
                paddingBlock: slot.props.paddingBlock || paddingBlock,
                paddingInline: slot.props.paddingInline || paddingInline,
              })
            )}
          </Box>
        )
      }}
    </WithSlots>
  )
}

TableFooter.displayName = 'Table.Footer'
