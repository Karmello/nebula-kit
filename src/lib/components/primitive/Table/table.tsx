import { CSSProperties, ReactNode } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps, TableContext } from 'lib/components'
import { withPrefix, getDataAttrs } from 'lib/helpers'

import './table.scss'

export type TableLayout = 'auto' | 'fixed'

export type TableOwnProps = {
  /** Table layout algorithm; maps to CSS table-layout */
  layout?: TableLayout
  /** Adds row striping via data attribute */
  zebra?: boolean
  /** Makes header sticky (requires a set height/overflow on the container) */
  stickyHeader?: boolean
  /** Wraps the table in a scroll container when true */
  scrollable?: boolean
} & {
  /** Visual style of the box surface (e.g. solid, outline) */
  variant?: BoxOwnProps['variant']
  /** Semantic tone or purpose (e.g. neutral, success, danger) */
  intent?: BoxOwnProps['intent']
}

export type TableProps = TableOwnProps & {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

/** Table is a low-level primitive for rendering semantic HTML tables with consistent styling and theming. It always renders a native <table> element and exposes props for layout (auto or fixed), borders, zebra striping, and sticky headers. Use it with companion components (TableHead, TableBody, TableRow, TableCell, etc.) to build accessible, fully-customizable tabular layouts. */
export const Table = ({
  children,
  className,
  layout = 'auto',
  zebra = false,
  stickyHeader = false,
  scrollable = false,
  variant = 'outline',
  intent = 'neutral',
  ...rest
}: TableProps) => {
  const tableElement = (
    <TableContext value={{ variant, intent }}>
      <Box
        as="table"
        className={classNames(withPrefix('table'), className)}
        {...getDataAttrs('table', { layout, zebra, stickyHeader })}
        variant={variant}
        intent={intent}
        {...rest}
      >
        {children}
      </Box>
    </TableContext>
  )

  if (!scrollable) {
    return tableElement
  }

  return <div className={withPrefix('table-container')}>{tableElement}</div>
}

Table.displayName = 'Table'
