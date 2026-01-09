import { memo } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { getSvgIconComponent } from 'lib/icons/lucide'

import { DEFAULT_ICON_SIZE, IconProps } from './definitions'

export const Icon = memo(
  ({
    // HtmlTag
    children,
    tagAttrs,
    tagRef,
    // own
    name,
    size = DEFAULT_ICON_SIZE,
    intent,
    color,
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
        variant="ghost"
        color={color}
        intent={intent}
        display="inline-block"
      >
        {children || (Svg ? <Svg style={{ width: size, height: size }} /> : null)}
      </Box>
    )
  }
)

Icon.displayName = 'Icon'
