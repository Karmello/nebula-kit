import { TabsProps } from 'lib/index.pro'

export const TABS_DIRECTION = ['row', 'column'] as const

export const DEFAULT_TABS_DEFAULT_VALUE: TabsProps['defaultValue'] = 1
export const DEFAULT_TABS_INTENT: TabsProps['intent'] = 'tertiary'
export const DEFAULT_TABS_DIRECTION: TabsProps['direction'] = 'row'
export const DEFAULT_TABS_SIZE: TabsProps['size'] = 'md'
