import { ResizeProps } from 'lib/index.core'
import { RevealTag, TShirtSize } from 'lib/types'

import { BoxProps } from '../Box'

export const DEFAULT_REVEAL_INTENT: RevealProps['intent'] = 'tertiary'
export const DEFAULT_REVEAL_SCALE: RevealProps['scale'] = 'sm'

type RevealOwnProps = {
  label: string
  scale?: TShirtSize
}

type PropsFromResize = {
  children: ResizeProps['children']
}

type PropsFromBox<T extends RevealTag = 'div'> = {
  tag?: BoxProps<T>['tag']
  tagAttrs?: BoxProps<T>['tagAttrs']
  tagRef?: BoxProps<T>['tagRef']
  color?: BoxProps<T>['color']
  intent?: BoxProps<T>['intent']
  disabled?: BoxProps<T>['disabled']
}

export type RevealProps<T extends RevealTag = 'div'> = PropsFromResize &
  PropsFromBox<T> &
  RevealOwnProps
