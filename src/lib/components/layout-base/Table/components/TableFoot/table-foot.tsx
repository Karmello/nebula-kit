import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TableFootProps } from './definitions'

export const TableFoot = ({ children, tagAttrs, tagRef }: TableFootProps) => {
  return (
    <Box
      tag="tfoot"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('table-foot'), tagAttrs?.className),
      }}
      tagRef={tagRef}
    >
      {children}
    </Box>
  )
}

TableFoot.displayName = 'Table.Foot'
