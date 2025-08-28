import { IconName, getSvgIconComponent } from 'lib/icons'
import { BoxIntent, ScaleValue } from 'lib/definitions'

export type SvgIconOwnProps = {
  name: IconName
  size?: ScaleValue
  intent?: BoxIntent
}

export const SvgIcon = ({ name, size, intent = 'neutral' }: SvgIconOwnProps) => {
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
