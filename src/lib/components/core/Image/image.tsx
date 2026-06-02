import { useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { ImageProps } from 'lib/index.core'
import { syncRespStyle } from 'lib/internals/dom'

import { Box } from '../Box'

import './image.scss'

export const Image = ({
  // Box
  tagAttrs,
  tagRef,
  blockSize,
  borderRadius,
  display,
  inlineSize,
  maxBlockSize,
  maxInlineSize,
  minBlockSize,
  minInlineSize,
  opacity,
  pointerEvents,
  overflow,
  overflowX,
  overflowY,
  aspectRatio,
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
}: ImageProps) => {
  const ref = useRef<HTMLImageElement>(null)

  const finalRef = tagRef || ref

  const { bp } = useScreen()

  useLayoutEffect(() => {
    syncRespStyle('Image', finalRef, bp, { objectFit, objectPosition })
  }, [bp, objectFit, objectPosition])

  return (
    <Box
      tag="img"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('image'), tagAttrs?.className),
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
      tagRef={finalRef}
      blockSize={blockSize}
      borderRadius={borderRadius}
      display={display}
      inlineSize={inlineSize}
      maxBlockSize={maxBlockSize}
      maxInlineSize={maxInlineSize}
      minBlockSize={minBlockSize}
      minInlineSize={minInlineSize}
      opacity={opacity}
      pointerEvents={pointerEvents}
      overflow={overflow}
      overflowX={overflowX}
      overflowY={overflowY}
      aspectRatio={aspectRatio}
    />
  )
}

Image.displayName = 'Image'
