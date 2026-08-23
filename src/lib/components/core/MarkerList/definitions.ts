import { MarkerListTag } from 'lib/types'

import { BoxProps } from '../Box'

export const MARKER_LIST_STYLES = ['disc', 'circle', 'square', 'decimal'] as const

export const DEFAULT_MARKER_LIST_GAP: MarkerListProps['gap'] = '4px'

export type MarkerListStyle = (typeof MARKER_LIST_STYLES)[number]

export type MarkerListProps<T extends MarkerListTag = 'ul'> = {
  // own
  listStyle?: MarkerListStyle
  // Box
  tag?: BoxProps<T>['tag']
  tagAttrs?: BoxProps<T>['tagAttrs']
  tagRef?: BoxProps<T>['tagRef']
  children?: BoxProps<T>['children']
  gap?: BoxProps<T>['gap']
  color?: BoxProps<T>['color']
  intent?: BoxProps<T>['intent']
}
