import { FlexProps, HtmlTagProps } from 'lib/components'

export const MarkerListTag = ['ul', 'ol'] as const
export const MarkerListStyle = ['disc', 'circle', 'square', 'decimal'] as const
export const DEFAULT_MARKER_LIST_ROW_GAP = 3

export type MarkerListTag = (typeof MarkerListTag)[number]
export type MarkerListStyle = (typeof MarkerListStyle)[number]

export type MarkerListOwnProps = {
  listStyle?: MarkerListStyle
}

type PropsFromHtmlTag<T extends MarkerListTag = 'ul'> = Pick<
  HtmlTagProps<T>,
  'tag' | 'tagAttrs' | 'tagRef'
> & {
  children: HtmlTagProps<T>['children']
}

type PropsFromFlex<T extends MarkerListTag = 'ul'> = Pick<FlexProps<T>, 'rowGap'>

export type MarkerListProps<T extends MarkerListTag = 'ul'> = PropsFromHtmlTag<T> &
  PropsFromFlex<T> &
  MarkerListOwnProps
