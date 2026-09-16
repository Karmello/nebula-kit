import { ICON_NAMES } from 'lib/constants'

import type { BoxProps } from '../Box/types'

export type IconName = (typeof ICON_NAMES)[number]

export type IconProps = {
  // own
  name?: IconName
  size?: string
  // Box
  elemAttrs?: BoxProps<'span'>['elemAttrs']
  elemRef?: BoxProps<'span'>['elemRef']
  intent?: BoxProps<'span'>['intent']
  color?: BoxProps<'span'>['color']
  children?: BoxProps<'span'>['children']
}
