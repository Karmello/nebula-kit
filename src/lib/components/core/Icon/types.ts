import { ICON_NAMES } from 'lib/constants'
import type { RespValue } from 'lib/types'

import type { BoxProps } from '../Box/types'

export type IconName = (typeof ICON_NAMES)[number]

export type IconProps = {
  // own
  name?: RespValue<IconName>
  size?: string
  // Box
  children?: BoxProps<'span'>['children']
  tagAttrs?: BoxProps<'span'>['tagAttrs']
  tagRef?: BoxProps<'span'>['tagRef']
  intent?: BoxProps<'span'>['intent']
  color?: BoxProps<'span'>['color']
}
