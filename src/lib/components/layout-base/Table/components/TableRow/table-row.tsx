import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TableRowProps } from './definitions'

export const TableRow = ({ children, tagAttrs, tagRef }: TableRowProps) => {
  return (
    <Box
      tag="tr"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('table-row'), tagAttrs?.className),
      }}
      tagRef={tagRef}
    >
      {children}
    </Box>
  )
}

TableRow.displayName = 'Table.Row'
