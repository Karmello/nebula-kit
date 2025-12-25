import { HtmlTagProps } from 'lib/components'
import { IconName } from 'lib/definitions'
import { BoxProps } from 'lib/components/core/base/Box'

export const DEFAULT_ICON_SIZE: string = '16px'

type IconOwnProps = {
  name?: IconName
  size?: string
  intent?: BoxProps['intent']
  color?: BoxProps['color']
}

export type IconProps = Pick<HtmlTagProps<'span'>, 'children' | 'tagAttrs' | 'tagRef'> & IconOwnProps
