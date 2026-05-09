import { CSSProperties } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { LoaderProps, DEFAULT_LOADER_SIZE, DEFAULT_LOADER_ACTIVE } from './definitions'

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
          ...tagAttrs?.style,
          '--neb-loader-color': color ? 'hsl(var(--h) var(--s) var(--main-primary-l))' : 'var(--loader)',
        } as CSSProperties,
      }}
      tagRef={tagRef}
      drawable
      variant="ghost"
      blockSize={size}
      inlineSize={size}
      color={color}
      position={centered ? 'absolute' : undefined}
      margin={centered ? 'auto' : undefined}
      inset={centered ? '0px' : undefined}
    />
  )
}

Loader.displayName = 'Loader'
