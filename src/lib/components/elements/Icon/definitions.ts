import { HtmlTagProps } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'
import { Color, IconName, ScaleValue } from 'lib/definitions'

export const DEFAULT_ICON_SIZE: ScaleValue = 16

type IconOwnProps = {
  name: IconName
  size?: ScaleValue
  intent?: BoxIntent
  color?: Color
}

export type IconProps = Pick<HtmlTagProps<'span'>, 'tagAttrs' | 'tagRef'> & IconOwnProps
