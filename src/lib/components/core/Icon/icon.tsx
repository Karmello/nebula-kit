import { memo, useLayoutEffect, useRef, useState } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { syncRespDataset } from 'lib/internals/dom'
import { resolveLengthValue, withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { IconName } from 'lib/types'
import { getSvgIconComponent } from 'lib/icons/lucide'

import { DEFAULT_ICON_SIZE, IconProps, IconSize } from './definitions'
import { CssValue } from '../../../types'

export const Icon = memo(
  ({
    // Box
    children,
    tagAttrs,
    tagRef,
    // own
    name,
    size = DEFAULT_ICON_SIZE,
    intent,
    color,
  }: IconProps) => {
    const localRef = useRef<HTMLSpanElement>(null)
    const { bp } = useScreen()

    const finalRef = tagRef || localRef

    const [resolvedName, setResolvedName] = useState<IconName>()
    const [resolvedSize, setResolvedSize] = useState<IconSize | CssValue>()

    useLayoutEffect(() => {
      syncRespDataset('Icon', finalRef, bp, { name, size: size !== undefined ? resolveLengthValue(size) : undefined })
      setResolvedName(finalRef.current?.dataset.nebIconName as IconName)
      setResolvedSize(finalRef.current?.dataset.nebIconSize)
    }, [bp, name, size])

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
        variant="ghost"
        color={color}
        intent={intent}
        display="inline-block"
      >
        {children || (Svg ? <Svg style={{ width: resolvedSize, height: resolvedSize }} /> : null)}
      </Box>
    )
  }
)

Icon.displayName = 'Icon'
