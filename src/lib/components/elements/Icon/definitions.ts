import { HtmlTagProps } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'
import { IconName, ScaleValue } from 'lib/definitions'

export const DEFAULT_ICON_SIZE: ScaleValue = 16

export type IconProps = Pick<HtmlTagProps<'svg'>, 'tagAttrs' | 'tagRef'> & {
  name: IconName
  size?: ScaleValue
  intent?: BoxIntent
}
