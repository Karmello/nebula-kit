import { ActionGroupProps } from 'lib/components/pro/ActionGroup/types'
import { CssFlexDirection } from 'lib/types'

export const ACTION_GROUP_DIRECTION = ['row', 'column'] as const satisfies CssFlexDirection[]
export const ACTION_GROUP_ATTACH = ['top', 'right', 'bottom', 'left', 'inline', 'block'] as const

export const DEFAULT_ACTION_GROUP_DIRECTION: ActionGroupProps['direction'] = 'row'
export const DEFAULT_ACTION_GROUP_INTENT: ActionGroupProps['intent'] = 'tertiary'
export const DEFAULT_ACTION_GROUP_RIPPLE: ActionGroupProps['ripple'] = true
