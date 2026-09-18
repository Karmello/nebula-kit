import { CSSProperties } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'

import { Box } from '../Box'
import { DEFAULT_LOADER_ACTIVE, DEFAULT_LOADER_SIZE } from './constants'
import { LoaderProps } from './types'

import './loader.scss'

export const Loader = ({
  // Box
  elemAttrs,
  elemRef,
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
      elemTag="span"
      className={classNames(withPrefix('loader'), elemAttrs?.className || '')}
      elemAttrs={{
        ...elemAttrs,
        style: {
          ...elemAttrs?.style,
          '--neb-loader-color': color ? 'var(--color-primary)' : 'var(--neb-text)',
        } as CSSProperties,
      }}
      elemRef={elemRef}
      drawable
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
