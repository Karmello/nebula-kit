import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix, getDataAttrs } from 'lib/helpers'

import { TableContext } from './use-table-context'
import { TableProps } from './definitions'
import './table.scss'

export const Table = ({
  children,
  elemProps,
  elemRef,
  variant,
  intent,
  layout = 'auto',
  zebra = false,
  stickyHeader = false,
}: TableProps) => {
  return (
    <TableContext value={{ variant, intent, layout }}>
      <Box elemProps={{ className: withPrefix('table-container') }}>
        <Box
          elem="table"
          elemProps={{
            ...elemProps,
            className: classNames(withPrefix('table'), elemProps?.className),
            style: {
              tableLayout: layout,
              ...(elemProps?.style || {}),
            },
            ...getDataAttrs('table', { zebra, stickyHeader }),
          }}
          elemRef={elemRef}
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
