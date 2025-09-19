import { BoxIntent, DEFAULT_SVG_ICON_SIZE } from 'lib/components'
import { IconName, ScaleValue } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'
import { getSvgIconComponent } from 'lib/icons/lucide'

export type SvgIconProps = {
  iconName: IconName
  iconSize?: ScaleValue
  iconIntent?: BoxIntent
}

export const SvgIcon = ({
  iconName,
  iconSize = DEFAULT_SVG_ICON_SIZE,
  iconIntent,
  ...rest
}: SvgIconProps) => {
  const Svg = getSvgIconComponent(iconName)

  return (
    <Svg
      className={withPrefix('svg-icon')}
      style={{
        width: iconSize !== undefined ? `var(--neb-scale-${iconSize})` : undefined,
        height: iconSize !== undefined ? `var(--neb-scale-${iconSize})` : undefined,
        color: iconIntent ? `var(--neb-text-${iconIntent})` : undefined,
      }}
      {...rest}
    />
  )
}

SvgIcon.displayName = 'SvgIcon'
