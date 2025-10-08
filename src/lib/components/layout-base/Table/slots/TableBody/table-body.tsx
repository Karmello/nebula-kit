import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { TableBodyProps } from './definitions'

export const TableBody = ({ children, tagAttrs, tagRef }: TableBodyProps) => {
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
            {slots['Table.Row']}
          </Box>
        )
      }}
    </WithSlots>
  )
}

TableBody.displayName = 'Table.Body'
