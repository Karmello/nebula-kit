import { ICON_NAMES } from 'lib/constants'
import { CssValue, RespValue, TShirtSize } from 'lib/types'

import type { BoxProps } from '../Box/types'

export const DEFAULT_ICON_SIZE: IconProps['size'] = 'md'
export const ICON_SIZES = ['sm', 'md', 'lg', 'xl', '2xl'] as const satisfies TShirtSize[]

export type IconName = (typeof ICON_NAMES)[number]
export type IconSize = (typeof ICON_SIZES)[number]

export type IconProps = {
  name?: RespValue<IconName>
  size?: RespValue<IconSize | CssValue>
} & Pick<BoxProps<'span'>, 'children' | 'tagAttrs' | 'tagRef' | 'intent' | 'color'>
