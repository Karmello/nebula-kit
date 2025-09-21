import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { applyStaticDataset } from 'lib/service'

import { TableContext } from './use-table-context'
import { TableProps } from './definitions'
import './table.scss'

export const Table = ({
  children,
  tagAttrs,
  tagRef,
  variant,
  intent,
  layout = 'auto',
  zebra = false,
  stickyHeader = false,
}: TableProps) => {
  return (
    <TableContext value={{ variant, intent, layout }}>
      <Box tagAttrs={{ className: withPrefix('table-container') }}>
        <Box
          tag="table"
          tagAttrs={{
            ...tagAttrs,
            className: classNames(withPrefix('table'), tagAttrs?.className),
            style: {
              tableLayout: layout,
              ...(tagAttrs?.style || {}),
            },
            ...applyStaticDataset('table', { zebra, stickyHeader }),
          }}
          tagRef={tagRef}
          variant={variant}
          intent={intent}
        >
          {children}
        </Box>
      </Box>
    </TableContext>
  )
}

Table.displayName = 'Table'
