import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TableCellProps } from './definitions'
import { useTableContext } from '../../TableContext'

export const TableCell = ({ children, tagAttrs, tagRef }: TableCellProps) => {
  const { variant, intent } = useTableContext()

  return (
    <Box
      tag="td"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('table-cell'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      variant={variant}
      intent={intent}
      paddingInline={10}
      paddingBlock={5}
      borderRadius={0}
    >
      {children}
    </Box>
  )
}

TableCell.displayName = 'TableCell'
