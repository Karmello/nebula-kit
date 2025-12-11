import { CSSProperties } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { LoaderProps, LOADER_SIZE_CONFIG, DEFAULT_LOADER_SIZE, DEFAULT_LOADER_ACTIVE } from './definitions'

import './loader.scss'

export const Loader = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  // Box
  color,
  // own
  active = DEFAULT_LOADER_ACTIVE,
  size = DEFAULT_LOADER_SIZE,
  centered,
}: LoaderProps) => {
  if (!active) {
    return null
  }

  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('loader'), tagAttrs?.className || ''),
        style: {
          '--neb-loader-color': `var(--neb-${color}-8, var(--neb-ripple-bg))`,
        } as CSSProperties,
      }}
      tagRef={tagRef}
      blockSize={LOADER_SIZE_CONFIG[size || 'md']}
      inlineSize={LOADER_SIZE_CONFIG[size || 'md']}
      color={color}
      position={centered ? 'absolute' : undefined}
      margin={centered ? 'auto' : undefined}
      top={centered ? '0px' : undefined}
      right={centered ? '0px' : undefined}
      bottom={centered ? '0px' : undefined}
      left={centered ? '0px' : undefined}
    />
  )
}

Loader.displayName = 'Loader'
