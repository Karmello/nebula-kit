import { BoxColor, BoxIntent, BoxProps } from 'lib/components/core/Box'
import { TShirtSize } from 'lib/types'

import { TABS_DIRECTION } from './constants'

export type TabsDirection = (typeof TABS_DIRECTION)[number]

export type TabsProps = {
  // own
  value?: string | number
  defaultValue?: string | number
  onChange?: (value: string | number) => void
  direction?: TabsDirection
  size?: TShirtSize
  stretch?: boolean
  // Box
  tagRef?: BoxProps['tagRef']
  tagAttrs?: BoxProps['tagAttrs']
  children: BoxProps['children']
  color?: BoxColor
  intent?: BoxIntent
}
