import { useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { syncRespStyle } from 'lib/internals/dom'

import { Box } from '../Box'
import { ImageProps } from './types'

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

  const finalRef = boxProps.elemRef || ref

  const { bp } = useScreen()

  useLayoutEffect(() => {
    syncRespStyle('Image', finalRef, bp, { objectFit, objectPosition })
  }, [bp, objectFit, objectPosition])

  return (
    <Box
      elemTag="img"
      className={classNames(withPrefix('image'), boxProps.elemAttrs?.className)}
      elemAttrs={{
        ...boxProps.elemAttrs,
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
      elemRef={finalRef}
    />
  )
}

Image.displayName = 'Image'
