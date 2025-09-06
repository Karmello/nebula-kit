import { IconName, getSvgIconComponent } from 'lib/icons'
import { BoxIntent, DEFAULT_BOX_INTENT, DEFAULT_SVG_ICON_SIZE, ScaleValue } from 'lib/definitions'

export type SvgIconProps = {
  iconName: IconName
  iconSize?: ScaleValue
  iconIntent?: BoxIntent
}

export const SvgIcon = ({
  iconName,
  iconSize = DEFAULT_SVG_ICON_SIZE,
  iconIntent = DEFAULT_BOX_INTENT,
}: SvgIconProps) => {
  const Svg = getSvgIconComponent(iconName)

  return (
    <Svg
      style={{
        width: iconSize !== undefined ? `var(--neb-scale-${iconSize})` : undefined,
        height: iconSize !== undefined ? `var(--neb-scale-${iconSize})` : undefined,
        color: `var(--neb-text-${iconIntent})`,
      }}
    />
  )
}
