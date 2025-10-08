import { cloneElement } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { TableHeaderRowProps } from './definitions'

export const TableHeaderRow = ({ children, tagAttrs, tagRef }: TableHeaderRowProps) => {
  return (
    <WithSlots<'Table.HeadCell'>
      childrenToVerify={children}
      componentName="Table.HeaderRow"
      slotsConfig={[{ name: 'Table.HeadCell', required: true, allowMultiple: true }]}
    >
      {({ slots }) => {
        return (
          <Box
            tag="tr"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('table-header-row'), tagAttrs?.className),
            }}
            tagRef={tagRef}
          >
            {slots['Table.HeadCell'].map(slot => cloneElement(slot as any, { tagAttrs: { scope: 'col' } }))}
          </Box>
        )
      }}
    </WithSlots>
  )
}

TableHeaderRow.displayName = 'Table.HeaderRow'
