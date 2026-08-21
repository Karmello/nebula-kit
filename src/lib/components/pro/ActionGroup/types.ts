import { type BoxProps } from 'lib/index.core'

import { ACTION_GROUP_ATTACH, ACTION_GROUP_DIRECTION } from './constants'

export type ActionGroupDirection = (typeof ACTION_GROUP_DIRECTION)[number]
export type ActionGroupAttach = (typeof ACTION_GROUP_ATTACH)[number]

export type ActionGroupProps = Pick<
  BoxProps,
  'tagRef' | 'tagAttrs' | 'color' | 'intent' | 'elevated' | 'ripple'
> & {
  children: BoxProps['children']
  direction?: ActionGroupDirection
  attach?: ActionGroupAttach
  stretch?: boolean
}
