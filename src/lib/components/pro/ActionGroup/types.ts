import { FlexProps } from 'lib/components'
import { ACTION_GROUP_DIRECTION } from 'lib/components/pro/ActionGroup/constants'

export type ActionGroupDirection = (typeof ACTION_GROUP_DIRECTION)[number]

export type ActionGroupProps = Pick<FlexProps, 'tagAttrs' | 'tagRef' | 'color' | 'intent' | 'ripple' | 'gap'> & {
  children: FlexProps['children']
  direction?: ActionGroupDirection
  square?: boolean
}
