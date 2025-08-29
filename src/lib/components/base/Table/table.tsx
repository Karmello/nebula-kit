import classNames from 'classnames'

import { Box, BoxOwnProps, BoxProps, TableContext } from 'lib/components'
import { withPrefix, getDataAttrs } from 'lib/helpers'

import './table.scss'

export type TableLayout = 'auto' | 'fixed'

export type TableOwnProps = {
  /** Sets the CSS table-layout algorithm: 'auto' (content-driven) or 'fixed' (width-driven). */
  layout?: TableLayout
  /** Enables alternating background colors for rows to improve readability. */
  zebra?: boolean
  /** Keeps the header row visible at the top while scrolling the table body. */
  stickyHeader?: boolean
}

export type TableProps = Pick<BoxProps, 'children' | 'className' | 'style'> &
  Omit<BoxOwnProps, 'display'> &
  TableOwnProps

/** Table is a styled wrapper around the native <table> element. It supports automatic or fixed layouts, optional zebra striping, and sticky headers, while passing through theming from Box. Use it together with TableHead, TableBody, TableRow, and TableCell to build accessible, consistent data tables. */
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
      <Box className={withPrefix('table-container')} maxBlockSize="100%">
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
            width: '100%',
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
