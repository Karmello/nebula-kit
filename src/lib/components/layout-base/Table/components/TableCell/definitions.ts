import { BoxProps } from 'lib/components'

type PropsFromHtmlTag = Pick<BoxProps<'td'>, 'children' | 'tagAttrs' | 'tagRef'>

type PropsFromBox = Pick<BoxProps<'td'>, 'intent'>

export type TableCellProps = PropsFromHtmlTag & PropsFromBox
