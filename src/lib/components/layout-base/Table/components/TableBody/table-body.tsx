import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TableBodyProps } from './definitions'

export const TableBody = ({ children, tagAttrs, tagRef }: TableBodyProps) => {
  return (
    <Box
      tag="tbody"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('table-body'), tagAttrs?.className),
      }}
      tagRef={tagRef}
    >
      {children}
    </Box>
  )
}

TableBody.displayName = 'TableBody'
