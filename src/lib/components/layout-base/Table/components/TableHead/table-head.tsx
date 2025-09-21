import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TableHeadProps } from './definitions'

export const TableHead = ({ children, tagAttrs, tagRef }: TableHeadProps) => {
  return (
    <Box
      tag="thead"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('table-head'), tagAttrs?.className),
      }}
      tagRef={tagRef}
    >
      {children}
    </Box>
  )
}

TableHead.displayName = 'TableHead'
