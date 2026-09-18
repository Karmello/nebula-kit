import { TShirtSize } from 'lib/types'

import type { BoxProps } from '../Box/types'
import { CALLOUT_STATUSES, CALLOUT_TAGS, CALLOUT_VARIANTS } from './constants'

export type CalloutTag = (typeof CALLOUT_TAGS)[number]
export type CalloutVariant = (typeof CALLOUT_VARIANTS)[number]
export type CalloutStatus = (typeof CALLOUT_STATUSES)[number]

export type CalloutProps<T extends CalloutTag = 'div'> = {
  // own
  content: string
  heading?: string
  scale?: TShirtSize
  variant?: CalloutVariant
  status?: CalloutStatus
  // Box
  elemTag?: BoxProps<T>['elemTag']
  elemAttrs?: BoxProps<T>['elemAttrs']
  elemRef?: BoxProps<T>['elemRef']
  intent?: BoxProps<T>['intent']
}
