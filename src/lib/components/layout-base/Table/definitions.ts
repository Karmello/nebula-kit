import { BoxProps } from 'lib/components'

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
