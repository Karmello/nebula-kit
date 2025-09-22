import { withPrefix } from 'lib/helpers'
import { getSvgIconComponent } from 'lib/icons/lucide'

import { DEFAULT_ICON_INTENT, DEFAULT_ICON_SIZE, IconProps } from './definitions'

export const Icon = ({
  name,
  size = DEFAULT_ICON_SIZE,
  intent = DEFAULT_ICON_INTENT,
  ...rest
}: IconProps) => {
  const Svg = getSvgIconComponent(name)

  return (
    <Svg
      className={withPrefix('icon')}
      style={{
        width: size !== undefined ? `var(--neb-scale-${size})` : undefined,
        height: size !== undefined ? `var(--neb-scale-${size})` : undefined,
        color: intent ? `var(--neb-text-${intent})` : undefined,
      }}
      {...rest}
    />
  )
}

Icon.displayName = 'Icon'
