import { FlexProps } from 'lib/index.core'

import { ACTION_GROUP_ATTACH, ACTION_GROUP_DIRECTION } from './constants'

export type ActionGroupDirection = (typeof ACTION_GROUP_DIRECTION)[number]
export type ActionGroupAttach = (typeof ACTION_GROUP_ATTACH)[number]

export type ActionGroupProps = Pick<FlexProps, 'tagRef' | 'tagAttrs' | 'color' | 'intent' | 'elevated' | 'ripple'> & {
  children: FlexProps['children']
  direction?: ActionGroupDirection
  attach?: ActionGroupAttach
  stretch?: boolean
}
