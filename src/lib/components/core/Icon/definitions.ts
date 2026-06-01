import { IconName, RespValue, TShirtSize } from 'lib/types'
import { BoxProps } from 'lib/components/core/Box'

import type { CssValue } from '../../../types'

export const DEFAULT_ICON_SIZE: IconProps['size'] = 'md'

export const ICON_SIZES = ['sm', 'md', 'lg', 'xl', '2xl'] as const satisfies TShirtSize[]

export type IconSize = (typeof ICON_SIZES)[number]

type IconOwnProps = {
  name?: RespValue<IconName>
  size?: RespValue<IconSize | CssValue>
  intent?: BoxProps['intent']
  color?: BoxProps['color']
}

export type IconProps = Pick<BoxProps<'span'>, 'children' | 'tagAttrs' | 'tagRef'> & IconOwnProps
