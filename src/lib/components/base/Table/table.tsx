import { ComponentPropsWithRef } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps, TableContext } from 'lib/components'
import { withPrefix, getDataAttrs } from 'lib/helpers'

import './table.scss'

export type TableLayout = 'auto' | 'fixed'

export type TableOwnProps = {
  layout?: TableLayout
  zebra?: boolean
  stickyHeader?: boolean
}

export type TableProps = ComponentPropsWithRef<'table'> & Omit<BoxOwnProps, 'display'> & TableOwnProps

export const Table = ({
  className,
  style,
  variant,
  intent,
  layout = 'auto',
  zebra = false,
  stickyHeader = false,
  ...rest
}: TableProps) => {
  return (
    <TableContext value={{ variant, intent, layout }}>
      <Box className={withPrefix('table-container')} overflowX="auto">
        <Box
          variant={variant}
          intent={intent}
          {...rest}
          className={classNames(withPrefix('table'), className)}
          as="table"
          {...getDataAttrs('table', { zebra })}
          style={{
            display: 'table',
            borderCollapse: 'collapse',
            tableLayout: layout,
            inlineSize: '100%',
            ...(stickyHeader
              ? {
                  position: 'sticky',
                  top: 0,
                  zIndex: 1,
                }
              : {}),
            ...style,
          }}
        />
      </Box>
    </TableContext>
  )
}

Table.displayName = 'Table'
