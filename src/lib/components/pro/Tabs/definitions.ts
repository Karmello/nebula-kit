import { BoxColor, BoxIntent, BoxProps } from 'lib/components/core/Box'
import { ActionGroupProps } from 'lib/index.pro'
import { ControlSize } from 'lib/types'

export const TABS_DIRECTION = ['row', 'column'] as const

export const DEFAULT_TABS_DEFAULT_VALUE: TabsProps['defaultValue'] = 1
export const DEFAULT_TABS_INTENT: TabsProps['intent'] = 'tertiary'
export const DEFAULT_TABS_DIRECTION: TabsProps['direction'] = 'row'
export const DEFAULT_TABS_SIZE: TabsProps['size'] = 'md'

export type TabsDirection = (typeof TABS_DIRECTION)[number]

export type TabsProps = {
  tagRef?: BoxProps['tagRef']
  tagAttrs?: BoxProps['tagAttrs']
  children: BoxProps['children']
  color?: BoxColor
  intent?: BoxIntent
  value?: string | number
  defaultValue?: string | number
  onChange?: (value: string | number) => void
  direction?: TabsDirection
  size?: ControlSize
  stretch?: ActionGroupProps['stretch']
}
