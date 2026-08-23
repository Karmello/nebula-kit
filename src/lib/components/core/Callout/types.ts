import { CalloutTag, TShirtSize } from 'lib/types'

import type { BoxProps } from '../Box/types'
import { CALLOUT_STATUSES, CALLOUT_VARIANTS } from './constants'

export type CalloutVariant = (typeof CALLOUT_VARIANTS)[number]
export type CalloutStatus = (typeof CALLOUT_STATUSES)[number]

export type CalloutProps<T extends CalloutTag = 'div'> = {
  // own
  content: string
  heading?: string
  size?: TShirtSize
  variant?: CalloutVariant
  status?: CalloutStatus
  // Box
  tag?: BoxProps<T>['tag']
  tagAttrs?: BoxProps<T>['tagAttrs']
  tagRef?: BoxProps<T>['tagRef']
  intent?: BoxProps<T>['intent']
}
