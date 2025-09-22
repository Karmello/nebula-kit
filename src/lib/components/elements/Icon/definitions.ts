import { BoxIntent } from 'lib/components/base/Box/definitions'
import { IconName, ScaleValue } from 'lib/definitions'

export const DEFAULT_ICON_SIZE = 8

export type IconProps = {
  iconName: IconName
  iconSize?: ScaleValue
  iconIntent?: BoxIntent
}
