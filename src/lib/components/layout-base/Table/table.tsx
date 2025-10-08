import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { applyStaticDataset } from 'lib/service'

import { TableContext } from './TableContext'
import { DEFAULT_TABLE_LAYOUT, DEFAULT_TABLE_INTENT, TableProps } from './definitions'
import './table.scss'

export const Table = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  children,
  // Box
  intent = DEFAULT_TABLE_INTENT,
  // own
  layout = DEFAULT_TABLE_LAYOUT,
  zebra = false,
}: TableProps) => {
  return (
    <TableContext value={{ intent, layout }}>
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
            ...applyStaticDataset('table', { zebra }),
          }}
          tagRef={tagRef}
          variant="solid"
          intent={intent}
        >
          {children}
        </Box>
      </Box>
    </TableContext>
  )
}

Table.displayName = 'Table'
