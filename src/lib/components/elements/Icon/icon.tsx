import { withPrefix } from 'lib/helpers'
import { getSvgIconComponent } from 'lib/icons/lucide'

import { DEFAULT_ICON_SIZE, IconProps } from './definitions'

export const Icon = ({ tagAttrs, tagRef, name, size = DEFAULT_ICON_SIZE, intent }: IconProps) => {
  const Svg = getSvgIconComponent(name)

  return (
    <Svg
      ref={tagRef}
      {...tagAttrs}
      className={withPrefix('icon')}
      style={{
        width: size !== undefined ? `var(--neb-scale-${size})` : undefined,
        height: size !== undefined ? `var(--neb-scale-${size})` : undefined,
        color: intent ? `var(--neb-text-${intent})` : undefined,
      }}
    />
  )
}

Icon.displayName = 'Icon'
