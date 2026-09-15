import { memo } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { getSvgIconComponent } from 'lib/icons/lucide'

import { Box } from '../Box'
import { DEFAULT_ICON_SIZE } from './constants'
import type { IconProps } from './types'

export const Icon = memo(
  ({
    // Box
    children,
    tagAttrs,
    tagRef,
    intent,
    color,
    // own
    name,
    size = DEFAULT_ICON_SIZE,
  }: IconProps) => {
    if (!name && !children) return null

    const Svg = name ? getSvgIconComponent(name) : null

    return (
      <Box
        tag="span"
        tagRef={tagRef}
        tagAttrs={{
          ...tagAttrs,
          className: classNames(withPrefix('icon'), tagAttrs?.className),
          style: {
            lineHeight: 0,
            ...tagAttrs?.style,
          },
        }}
        drawable
        text="colored"
        color={color}
        intent={intent}
        display="block"
      >
        {children || (Svg ? <Svg style={{ width: size, height: size }} /> : null)}
      </Box>
    )
  }
)

Icon.displayName = 'Icon'
