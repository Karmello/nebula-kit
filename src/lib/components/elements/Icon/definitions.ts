import { BoxIntent } from 'lib/components/base/Box/definitions'
import { HtmlTagProps } from 'lib/components/utility'
import { IconName, ScaleValue } from 'lib/definitions'

export const DEFAULT_ICON_SIZE: ScaleValue = 8

export type IconProps = Pick<HtmlTagProps<'svg'>, 'tagAttrs' | 'tagRef'> & {
  name: IconName
  size?: ScaleValue
  intent?: BoxIntent
}
