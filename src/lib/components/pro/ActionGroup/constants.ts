import { ActionGroupProps } from 'lib/components/pro/ActionGroup/types'
import { CssFlexDirection, TShirtSize } from 'lib/types'

export const ACTION_GROUP_DIRECTION = ['row', 'column'] as const satisfies CssFlexDirection[]
export const ACTION_GROUP_GAP = ['3xs', '2xs', 'xs'] as const satisfies TShirtSize[]

export const DEFAULT_ACTION_GROUP_DIRECTION: ActionGroupProps['direction'] = 'row'
export const DEFAULT_ACTION_GROUP_INTENT: ActionGroupProps['intent'] = 'tertiary'
export const DEFAULT_ACTION_GROUP_RIPPLE: ActionGroupProps['ripple'] = true
export const DEFAULT_ACTION_GROUP_GAP: ActionGroupProps['gap'] = '3xs'
