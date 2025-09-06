import { IconName, getSvgIconComponent } from 'lib/icons'
import { BoxIntent, DEFAULT_BOX_INTENT, DEFAULT_SVG_ICON_SIZE, ScaleValue } from 'lib/definitions'

export type SvgIconProps = {
  name: IconName
  size?: ScaleValue
  intent?: BoxIntent
}

export const SvgIcon = ({
  name,
  size = DEFAULT_SVG_ICON_SIZE,
  intent = DEFAULT_BOX_INTENT,
}: SvgIconProps) => {
  const Svg = getSvgIconComponent(name)

  return (
    <Svg
      style={{
        width: size !== undefined ? `var(--neb-scale-${size})` : undefined,
        height: size !== undefined ? `var(--neb-scale-${size})` : undefined,
        color: `var(--neb-text-${intent})`,
      }}
    />
  )
}
