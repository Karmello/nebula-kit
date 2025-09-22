import { withPrefix } from 'lib/helpers'
import { getSvgIconComponent } from 'lib/icons/lucide'

import { DEFAULT_ICON_SIZE, IconProps } from './definitions'

export const Icon = ({ iconName, iconSize = DEFAULT_ICON_SIZE, iconIntent, ...rest }: IconProps) => {
  const Svg = getSvgIconComponent(iconName)

  return (
    <Svg
      className={withPrefix('icon')}
      style={{
        width: iconSize !== undefined ? `var(--neb-scale-${iconSize})` : undefined,
        height: iconSize !== undefined ? `var(--neb-scale-${iconSize})` : undefined,
        color: iconIntent ? `var(--neb-text-${iconIntent})` : undefined,
      }}
      {...rest}
    />
  )
}

Icon.displayName = 'Icon'
