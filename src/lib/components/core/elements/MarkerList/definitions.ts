import { BoxProps, FlexProps, HtmlTagProps } from 'lib/components'

export const MARKER_LIST_TAGS = ['ul', 'ol'] as const
export const MARKER_LIST_STYLES = ['disc', 'circle', 'square', 'decimal'] as const
export const DEFAULT_MARKER_LIST_ROW_GAP = 3

export type MarkerListTag = (typeof MARKER_LIST_TAGS)[number]
export type MarkerListStyle = (typeof MARKER_LIST_STYLES)[number]

type MarkerListOwnProps = {
  listStyle?: MarkerListStyle
}

type PropsFromHtmlTag<T extends MarkerListTag = 'ul'> = Pick<
  HtmlTagProps<T>,
  'tag' | 'tagAttrs' | 'tagRef'
> & {
  children: HtmlTagProps<T>['children']
}

type PropsFromFlex<T extends MarkerListTag = 'ul'> = Pick<FlexProps<T>, 'rowGap'>

type PropsFromBox<T extends MarkerListTag = 'ul'> = Pick<BoxProps<T>, 'color' | 'intent'>

export type MarkerListProps<T extends MarkerListTag = 'ul'> = PropsFromHtmlTag<T> &
  PropsFromFlex<T> &
  PropsFromBox<T> &
  MarkerListOwnProps
