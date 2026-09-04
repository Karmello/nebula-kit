import { memo, useLayoutEffect, useRef, useState } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { getSvgIconComponent } from 'lib/icons/lucide'
import { syncRespDataset } from 'lib/internals/dom'

import { Box } from '../Box'
import { DEFAULT_ICON_SIZE } from './constants'
import type { IconName, IconProps } from './types'

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
    const localRef = useRef<HTMLSpanElement>(null)
    const { bp } = useScreen()

    const finalRef = tagRef || localRef

    const [resolvedName, setResolvedName] = useState<IconName>()

    useLayoutEffect(() => {
      syncRespDataset('Icon', finalRef, bp, { name })
      setResolvedName(finalRef.current?.dataset.nebIconName as IconName)
    }, [bp, name])

    if (!name && !children) return null

    const Svg = resolvedName ? getSvgIconComponent(resolvedName) : null

    return (
      <Box
        tag="span"
        tagRef={finalRef}
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
