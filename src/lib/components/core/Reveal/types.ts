import { ResizeProps } from 'lib/index.core'
import { TShirtSize } from 'lib/types'

import { BoxProps } from '../Box'
import { REVEAL_TAGS } from './constants'

export type RevealTag = (typeof REVEAL_TAGS)[number]

export type RevealProps<T extends RevealTag = 'div'> = {
  // own
  label: string
  scale?: TShirtSize
  // Resize
  children: ResizeProps['children']
  // Box
  tag?: BoxProps<T>['tag']
  tagAttrs?: BoxProps<T>['tagAttrs']
  tagRef?: BoxProps<T>['tagRef']
  color?: BoxProps<T>['color']
  intent?: BoxProps<T>['intent']
  disabled?: BoxProps<T>['disabled']
}
