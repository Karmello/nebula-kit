import { IconName, getSvgIconComponent } from 'lib-2/icons'
import { ScaleValue } from 'lib-2/definitions'

export type SvgIconProps = {
  name: IconName
  size?: ScaleValue
}

export const SvgIcon = ({ name, size }: SvgIconProps) => {
  const Svg = getSvgIconComponent(name)

  return (
    <Svg
      style={{
        width: size !== undefined ? `var(--scale-${size})` : undefined,
        height: size !== undefined ? `var(--scale-${size})` : undefined,
      }}
    />
  )
}
