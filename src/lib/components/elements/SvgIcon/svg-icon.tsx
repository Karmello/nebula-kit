import { BoxIntent, DEFAULT_SVG_ICON_SIZE, ScaleValue } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'
import { IconName, getSvgIconComponent } from 'lib/icons'

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
