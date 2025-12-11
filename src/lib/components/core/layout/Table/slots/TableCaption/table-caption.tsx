import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TableCaptionProps } from './definitions'

export const TableCaption = ({ children, tagAttrs, tagRef }: TableCaptionProps) => {
  return (
    <Box
      tag="caption"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('table-caption'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      paddingBlock="10px"
      borderRadius="0px"
    >
      {children}
    </Box>
  )
}

TableCaption.displayName = 'Table.Caption'
