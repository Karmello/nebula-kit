import classNames from 'classnames'

import { Box, BoxProps, TableContext } from 'lib/components'
import { withPrefix, getDataAttrs } from 'lib/helpers'

import './table.scss'

export type TableLayout = 'auto' | 'fixed'

export type TableOwnProps = {
  layout?: TableLayout
  zebra?: boolean
  stickyHeader?: boolean
}

export type TableProps = Pick<
  BoxProps<'table'>,
  'children' | 'elemProps' | 'elemRef' | 'variant' | 'intent'
> &
  TableOwnProps

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
          }}
          elemRef={elemRef}
          variant={variant}
          intent={intent}
          {...getDataAttrs('table', { zebra, stickyHeader })}
        >
          {children}
        </Box>
      </Box>
    </TableContext>
  )
}

Table.displayName = 'Table'
