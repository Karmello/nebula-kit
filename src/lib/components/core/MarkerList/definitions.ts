import { BoxProps, FlexProps } from 'lib/components'

export const MARKER_LIST_TAGS = ['ul', 'ol'] as const
export const MARKER_LIST_STYLES = ['disc', 'circle', 'square', 'decimal'] as const

export const DEFAULT_MARKER_LIST_GAP: MarkerListProps['gap'] = '2xs'

export type MarkerListTag = (typeof MARKER_LIST_TAGS)[number]
export type MarkerListStyle = (typeof MARKER_LIST_STYLES)[number]

type MarkerListOwnProps = {
  listStyle?: MarkerListStyle
}

type PropsFromFlex<T extends MarkerListTag = 'ul'> = Pick<FlexProps<T>, 'tag' | 'tagAttrs' | 'tagRef' | 'children' | 'gap'>

type PropsFromBox<T extends MarkerListTag = 'ul'> = Pick<BoxProps<T>, 'color' | 'intent'>

export type MarkerListProps<T extends MarkerListTag = 'ul'> = PropsFromFlex<T> & PropsFromBox<T> & MarkerListOwnProps
