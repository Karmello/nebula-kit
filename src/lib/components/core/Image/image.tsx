import { useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { ImageProps } from 'lib/index.core'
import { syncRespStyle } from 'lib/internals/dom'

import { Box } from '../Box'

import './image.scss'

export const Image = ({
  // own
  src,
  alt,
  title,
  loading,
  decoding,
  crossOrigin,
  referrerPolicy,
  fetchPriority,
  objectFit,
  objectPosition,
  onLoad,
  onError,
  // Box
  ...boxProps
}: ImageProps) => {
  const ref = useRef<HTMLImageElement>(null)

  const finalRef = boxProps.tagRef || ref

  const { bp } = useScreen()

  useLayoutEffect(() => {
    syncRespStyle('Image', finalRef, bp, { objectFit, objectPosition })
  }, [bp, objectFit, objectPosition])

  return (
    <Box
      tag="img"
      tagAttrs={{
        ...boxProps.tagAttrs,
        className: classNames(withPrefix('image'), boxProps.tagAttrs?.className),
        src,
        alt,
        title,
        loading,
        decoding,
        crossOrigin,
        referrerPolicy,
        fetchPriority,
        onLoad,
        onError,
      }}
      {...boxProps}
      tagRef={finalRef}
    />
  )
}

Image.displayName = 'Image'
