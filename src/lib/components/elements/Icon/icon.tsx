import { memo } from 'react'

import { withPrefix } from 'lib/helpers'
import { getSvgIconComponent } from 'lib/icons/lucide'

import { DEFAULT_ICON_SIZE, IconProps } from './definitions'

export const Icon = memo(({ tagAttrs, tagRef, name, size = DEFAULT_ICON_SIZE, intent }: IconProps) => {
  const Svg = getSvgIconComponent(name)

  let color: string | undefined = undefined

  if (intent) {
    if (intent === 'neutral') {
      color = 'var(--neb-text)'
    } else if (intent === 'inverse') {
      color = 'var(--neb-background)'
    } else {
      color = `var(--neb-${intent}-solid-bg)`
    }
  }

  return (
    <Svg
      ref={tagRef}
      {...tagAttrs}
      className={withPrefix('icon')}
      style={{
        width: size !== undefined ? `var(--neb-scale-${size})` : undefined,
        height: size !== undefined ? `var(--neb-scale-${size})` : undefined,
        color,
      }}
    />
  )
})

Icon.displayName = 'Icon'
