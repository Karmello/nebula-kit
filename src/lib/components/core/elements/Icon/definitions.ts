import { HtmlTagProps } from 'lib/components'
import { BoxIntent } from 'lib/components/core/base/Box/definitions'
import { Color, IconName } from 'lib/definitions'

export const DEFAULT_ICON_SIZE: string = '16px'

type IconOwnProps = {
  name: IconName
  size?: string
  intent?: BoxIntent
  color?: Color
}

export type IconProps = Pick<HtmlTagProps<'span'>, 'tagAttrs' | 'tagRef'> & IconOwnProps
