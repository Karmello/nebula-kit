import { FlexProps } from 'lib/index.core'

import { ACTION_GROUP_ATTACHED, ACTION_GROUP_DIRECTION, ACTION_GROUP_GAP } from './constants'

export type ActionGroupDirection = (typeof ACTION_GROUP_DIRECTION)[number]
export type ActionGroupGap = (typeof ACTION_GROUP_GAP)[number]
export type ActionGroupAttached = (typeof ACTION_GROUP_ATTACHED)[number]

export type ActionGroupProps = Pick<FlexProps, 'tagRef' | 'tagAttrs' | 'color' | 'intent' | 'elevated' | 'ripple'> & {
  children: FlexProps['children']
  direction?: ActionGroupDirection
  gap?: ActionGroupGap
  attached?: ActionGroupAttached
}
