import { cloneElement } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { TableHeadRowProps } from './definitions'

export const TableHeadRow = ({ children, tagAttrs, tagRef }: TableHeadRowProps) => {
  return (
    <WithSlots<'Table.HeadCell'>
      childrenToVerify={children}
      componentName="Table.HeadRow"
      slotsConfig={[{ name: 'Table.HeadCell', required: true, allowMultiple: true }]}
    >
      {({ slots }) => {
        return (
          <Box
            tag="tr"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('table-row'), tagAttrs?.className),
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

TableHeadRow.displayName = 'Table.HeadRow'
