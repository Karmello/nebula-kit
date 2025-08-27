import { IconName, getSvgIconComponent } from 'lib/icons'
import { ScaleValue } from 'lib/definitions'

export type SvgIconOwnProps = {
  name: IconName
  size?: ScaleValue
}

export const SvgIcon = ({ name, size }: SvgIconOwnProps) => {
  const Svg = getSvgIconComponent(name)

  return (
    <Svg
      style={{
        width: size !== undefined ? `var(--neb-scale-${size})` : undefined,
        height: size !== undefined ? `var(--neb-scale-${size})` : undefined,
      }}
    />
  )
}
