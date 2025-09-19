import { BoxIntent } from 'lib/components/base/Box/definitions'
import { IconName, ScaleValue } from 'lib/definitions'

export const DEFAULT_SVG_ICON_SIZE = 8

export type SvgIconProps = {
  iconName: IconName
  iconSize?: ScaleValue
  iconIntent?: BoxIntent
}
