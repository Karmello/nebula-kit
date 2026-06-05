import { FlexProps } from 'lib/components'
import { ACTION_GROUP_DIRECTION, ACTION_GROUP_GAP } from 'lib/components/pro/ActionGroup/constants'
import { RespValue } from 'lib/types'

export type ActionGroupDirection = (typeof ACTION_GROUP_DIRECTION)[number]
export type ActionGroupGap = (typeof ACTION_GROUP_GAP)[number]

export type ActionGroupProps = Pick<FlexProps, 'tagAttrs' | 'tagRef' | 'color' | 'intent' | 'ripple'> & {
  children: FlexProps['children']
  direction?: RespValue<ActionGroupDirection>
  gap?: RespValue<ActionGroupGap>
  square?: boolean
}
