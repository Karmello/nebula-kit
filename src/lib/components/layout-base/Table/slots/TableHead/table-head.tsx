import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { TableHeadProps } from './definitions'

export const TableHead = ({ children, tagAttrs, tagRef }: TableHeadProps) => {
  return (
    <WithSlots<'Table.HeadRow'>
      childrenToVerify={children}
      componentName="Table.Head"
      slotsConfig={[{ name: 'Table.HeadRow', required: true, allowMultiple: true }]}
    >
      {({ slots }) => {
        return (
          <Box
            tag="thead"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('table-head'), tagAttrs?.className),
            }}
            tagRef={tagRef}
          >
            {slots['Table.HeadRow']}
          </Box>
        )
      }}
    </WithSlots>
  )
}

TableHead.displayName = 'Table.Head'
