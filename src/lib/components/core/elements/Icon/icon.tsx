import { memo } from 'react'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { getSvgIconComponent } from 'lib/icons/lucide'

import { DEFAULT_ICON_SIZE, IconProps } from './definitions'
import classNames from 'classnames'

export const Icon = memo(
  ({
    // HtmlTag
    tagAttrs,
    tagRef,
    // own
    name,
    size = DEFAULT_ICON_SIZE,
    intent,
    color,
  }: IconProps) => {
    const Svg = getSvgIconComponent(name)

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
        <Svg
          style={{
            width: size !== undefined ? size : undefined,
            height: size !== undefined ? size : undefined,
          }}
        />
      </Box>
    )
  }
)

Icon.displayName = 'Icon'
