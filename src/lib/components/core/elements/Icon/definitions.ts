import { HtmlTagProps } from 'lib/components'
import { CssValue, IconName, TShirtSize } from 'lib/definitions'
import { BoxProps } from 'lib/components/core/base/Box'

export const DEFAULT_ICON_SIZE: IconProps['size'] = 'md'

export const ICON_SIZES = ['sm', 'md', 'lg', 'xl', '2xl'] as const satisfies TShirtSize[]

export type IconSize = (typeof ICON_SIZES)[number]

type IconOwnProps = {
  name?: IconName
  size?: IconSize | CssValue
  intent?: BoxProps['intent']
  color?: BoxProps['color']
}

export type IconProps = Pick<HtmlTagProps<'span'>, 'children' | 'tagAttrs' | 'tagRef'> & IconOwnProps
