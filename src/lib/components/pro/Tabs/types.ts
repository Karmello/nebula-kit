import { BoxColor, BoxIntent, BoxProps } from 'lib/components/core/Box'
import { TShirtSize } from 'lib/types'

import { TABS_ORIENTATION } from './constants'

export type TabsOrientation = (typeof TABS_ORIENTATION)[number]

export type TabsProps = {
  // own
  value?: string | number
  defaultValue?: string | number
  onChange?: (value: string | number) => void
  orientation?: TabsOrientation
  scale?: TShirtSize
  stretch?: boolean
  // Box
  tagRef?: BoxProps['tagRef']
  tagAttrs?: BoxProps['tagAttrs']
  children: BoxProps['children']
  color?: BoxColor
  intent?: BoxIntent
}
