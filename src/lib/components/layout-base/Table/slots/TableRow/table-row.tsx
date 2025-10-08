import { cloneElement } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { TableRowProps } from './definitions'

export const TableRow = ({ children, tagAttrs, tagRef }: TableRowProps) => {
  return (
    <WithSlots<'Table.HeadCell' | 'Table.Cell'>
      childrenToVerify={children}
      componentName="Table.Row"
      slotsConfig={[
        { name: 'Table.HeadCell', allowMultiple: true },
        { name: 'Table.Cell', allowMultiple: true },
      ]}
      someRequired
    >
      {({ validNodes }) => {
        return (
          <Box
            tag="tr"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('table-row'), tagAttrs?.className),
            }}
            tagRef={tagRef}
          >
            {validNodes.map((slot: any) => {
              if (slot.type.displayName === 'Table.HeadCell') {
                return cloneElement(slot as any, { tagAttrs: { scope: 'row' } })
              } else {
                return slot
              }
            })}
          </Box>
        )
      }}
    </WithSlots>
  )
}

TableRow.displayName = 'Table.Row'
