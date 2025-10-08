import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { TableHeaderProps } from './definitions'

export const TableHeader = ({ children, tagAttrs, tagRef }: TableHeaderProps) => {
  return (
    <WithSlots<'Table.HeaderRow'>
      childrenToVerify={children}
      componentName="Table.Header"
      slotsConfig={[{ name: 'Table.HeaderRow', required: true, allowMultiple: true }]}
    >
      {({ slots }) => {
        return (
          <Box
            tag="thead"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('table-header'), tagAttrs?.className),
            }}
            tagRef={tagRef}
          >
            {slots['Table.HeaderRow']}
          </Box>
        )
      }}
    </WithSlots>
  )
}

TableHeader.displayName = 'Table.Header'
