import { ResizeProps } from 'lib/index.core'
import { RevealTag, TShirtSize } from 'lib/types'

import { BoxProps } from '../Box'

export const DEFAULT_REVEAL_INTENT: RevealProps['intent'] = 'tertiary'
export const DEFAULT_REVEAL_SCALE: RevealProps['scale'] = 'sm'

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
