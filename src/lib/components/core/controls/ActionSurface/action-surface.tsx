import { ComponentRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/core/internal'
import { updateDomRespDataset } from 'lib/service'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'

import {
  type ActionSurfaceProps,
  type ActionSurfaceTag,
  DEFAULT_ACTION_SURFACE_INTENT,
  DEFAULT_ACTION_SURFACE_INTERACTIVE,
  DEFAULT_ACTION_SURFACE_RIPPLE,
  DEFAULT_ACTION_SURFACE_VARIANT,
} from './definitions'

import './action-surface.scss'

export const ActionSurface = <T extends ActionSurfaceTag = 'button'>({
  // HtmlTag
  children,
  tag,
  tagAttrs,
  tagRef,
  // Box
  blockSize,
  minBlockSize,
  maxBlockSize,
  color,
  disabled,
  elevated,
  hidden,
  inlineSize,
  interactive = DEFAULT_ACTION_SURFACE_INTERACTIVE,
  minInlineSize,
  maxInlineSize,
  intent = DEFAULT_ACTION_SURFACE_INTENT,
  variant = DEFAULT_ACTION_SURFACE_VARIANT,
  // own
  size,
  fullWidth,
  selected,
  ripple = DEFAULT_ACTION_SURFACE_RIPPLE,
  onClick,
}: ActionSurfaceProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    updateDomRespDataset('ActionSurface', tagRef || ref, bp, { fullWidth })
  }, [bp, fullWidth])

  return (
    <WithSlots<'ActionSurface.Heading' | 'ActionSurface.Description'>
      childrenToVerify={children}
      componentName="ActionSurface"
      slotsConfig={[{ name: 'ActionSurface.Heading', required: true }, { name: 'ActionSurface.Description' }]}
    >
      {({ slotsByName }) => {
        return (
          <Box
            tag={tag || 'button'}
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('action-surface'), tagAttrs?.className),
              type: onClick,
            }}
            tagRef={tagRef || ref}
            drawable
            interactive={interactive}
            blockSize={blockSize}
            minBlockSize={minBlockSize}
            maxBlockSize={maxBlockSize}
            color={color}
            disabled={disabled}
            elevated={elevated}
            hidden={hidden}
            inlineSize={inlineSize}
            minInlineSize={minInlineSize}
            maxInlineSize={maxInlineSize}
            intent={intent}
            surface={selected ? 'selected' : undefined}
            variant={variant}
          >
            {slotsByName['ActionSurface.Heading']}
            {slotsByName['ActionSurface.Description']}
          </Box>
        )
      }}
    </WithSlots>
  )
}

ActionSurface.displayName = 'ActionSurface'
