import { ICON_NAMES } from 'lib/constants'
import type { CssValue, Length, RespValue } from 'lib/types'

import type { BoxProps } from '../Box/types'

export type IconName = (typeof ICON_NAMES)[number]

export type IconProps = {
  name?: RespValue<IconName>
  size?: Length | CssValue
} & Pick<BoxProps<'span'>, 'children' | 'tagAttrs' | 'tagRef' | 'intent' | 'color'>
