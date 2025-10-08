import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { TableFootProps } from './definitions'

export const TableFoot = ({ children, tagAttrs, tagRef }: TableFootProps) => {
  return (
    <WithSlots<'Table.Row'>
      childrenToVerify={children}
      componentName="Table.Foot"
      slotsConfig={[{ name: 'Table.Row', required: true, allowMultiple: true }]}
    >
      {({ slots }) => {
        return (
          <Box
            tag="tfoot"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('table-foot'), tagAttrs?.className),
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

TableFoot.displayName = 'Table.Foot'
