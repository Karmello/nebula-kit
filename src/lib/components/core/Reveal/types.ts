import type { ResizeProps } from 'lib/components/core/Resize'
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
  elemTag?: BoxProps<T>['elemTag']
  elemAttrs?: BoxProps<T>['elemAttrs']
  elemRef?: BoxProps<T>['elemRef']
  color?: BoxProps<T>['color']
  intent?: BoxProps<T>['intent']
  disabled?: BoxProps<T>['disabled']
}
