import { MarkerListTag } from 'lib/types'

import { BoxProps } from '../Box'

export const MARKER_LIST_STYLES = ['disc', 'circle', 'square', 'decimal'] as const

export const DEFAULT_MARKER_LIST_GAP: MarkerListProps['gap'] = '4px'

export type MarkerListStyle = (typeof MARKER_LIST_STYLES)[number]

type MarkerListOwnProps = {
  listStyle?: MarkerListStyle
}

type PropsFromBox<T extends MarkerListTag = 'ul'> = Pick<
  BoxProps<T>,
  'tag' | 'tagAttrs' | 'tagRef' | 'children' | 'gap' | 'color' | 'intent'
>

export type MarkerListProps<T extends MarkerListTag = 'ul'> = PropsFromBox<T> & MarkerListOwnProps
