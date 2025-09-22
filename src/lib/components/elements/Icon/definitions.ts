import { BoxIntent } from 'lib/components/base/Box/definitions'
import { IconName, ScaleValue } from 'lib/definitions'

export const DEFAULT_ICON_INTENT: BoxIntent = 'neutral'
export const DEFAULT_ICON_SIZE: ScaleValue = 8

export type IconProps = {
  name: IconName
  size?: ScaleValue
  intent?: BoxIntent
}
