import { BoxProps } from '../Box'
import { MARKER_LIST_STYLES, MARKER_LIST_TAGS } from './constants'

export type MarkerListTag = (typeof MARKER_LIST_TAGS)[number]
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
