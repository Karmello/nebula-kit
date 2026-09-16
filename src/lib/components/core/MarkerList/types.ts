import { BoxProps } from '../Box'
import { MARKER_LIST_STYLES, MARKER_LIST_TAGS } from './constants'

export type MarkerListTag = (typeof MARKER_LIST_TAGS)[number]
export type MarkerListStyle = (typeof MARKER_LIST_STYLES)[number]

export type MarkerListProps<T extends MarkerListTag = 'ul'> = {
  // own
  listStyle?: MarkerListStyle
  // Box
  elemTag?: BoxProps<T>['elemTag']
  elemAttrs?: BoxProps<T>['elemAttrs']
  elemRef?: BoxProps<T>['elemRef']
  children?: BoxProps<T>['children']
  gap?: BoxProps<T>['gap']
  color?: BoxProps<T>['color']
  intent?: BoxProps<T>['intent']
}
