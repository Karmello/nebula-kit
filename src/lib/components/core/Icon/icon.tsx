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
    elemAttrs,
    elemRef,
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
        elemTag="span"
        elemRef={elemRef}
        className={classNames(withPrefix('icon'), elemAttrs?.className)}
        elemAttrs={{
          ...elemAttrs,
          style: {
            lineHeight: 0,
            ...elemAttrs?.style,
          },
        }}
        drawable
        textMode="colored"
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
