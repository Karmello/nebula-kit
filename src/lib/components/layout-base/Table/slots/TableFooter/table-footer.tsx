import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { TableFooterProps } from './definitions'

export const TableFooter = ({ children, tagAttrs, tagRef }: TableFooterProps) => {
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
            {slots['Table.Row']}
          </Box>
        )
      }}
    </WithSlots>
  )
}

TableFooter.displayName = 'Table.Footer'
