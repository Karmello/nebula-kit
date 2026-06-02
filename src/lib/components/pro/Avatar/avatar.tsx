import { useLayoutEffect, useRef, useState } from 'react'

import { Box, Image, Loader, Text } from 'lib/index.core'
import { AvatarProps } from 'lib/index.pro'

import {
  AVATAR_SIZES_MAP,
  DEFAULT_AVATAR_OBJECT_FIT,
  DEFAULT_AVATAR_OBJECT_POSITION,
  DEFAULT_AVATAR_SHAPE,
  DEFAULT_AVATAR_SIZE,
  LOADER_DELAY,
  MIN_LOADER_VISIBLE_TIME,
} from './definitions'

export const Avatar = ({
  // Image
  tagAttrs,
  tagRef,
  src,
  alt,
  title,
  loading,
  decoding,
  fetchPriority,
  crossOrigin,
  referrerPolicy,
  objectFit = DEFAULT_AVATAR_OBJECT_FIT,
  objectPosition = DEFAULT_AVATAR_OBJECT_POSITION,
  // own
  size = DEFAULT_AVATAR_SIZE,
  shape = DEFAULT_AVATAR_SHAPE,
  initials,
}: AvatarProps) => {
  const [fetchStatus, setFetchStatus] = useState<'pending' | 'success' | 'error' | null>(null)
  const [showLoader, setShowLoader] = useState<boolean>(false)

  const imgRef = useRef<HTMLImageElement | null>(null)
  const delayTimerRef = useRef<number | null>(null)
  const hideTimerRef = useRef<number | null>(null)
  const loaderShownAtRef = useRef<number | null>(null)

  useLayoutEffect(() => {
    if (delayTimerRef.current) clearTimeout(delayTimerRef.current)
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)

    loaderShownAtRef.current = null

    if (!src) {
      setFetchStatus(null)
      return
    }

    setFetchStatus('pending')

    // cached image fast-path
    queueMicrotask(() => {
      const img = imgRef.current
      if (img && img.complete && img.naturalWidth > 0) {
        resolveImage('success')
      }
    })

    delayTimerRef.current = window.setTimeout(() => {
      loaderShownAtRef.current = Date.now()
      setShowLoader(true)
    }, LOADER_DELAY)

    return () => {
      if (delayTimerRef.current) clearTimeout(delayTimerRef.current)
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
    }
  }, [src])

  const resolveImage = (status: 'success' | 'error') => {
    setFetchStatus(status)

    if (delayTimerRef.current) {
      clearTimeout(delayTimerRef.current)
      delayTimerRef.current = null
    }

    if (!loaderShownAtRef.current) {
      setShowLoader(false)
      return
    }

    const elapsed = Date.now() - loaderShownAtRef.current
    const remaining = MIN_LOADER_VISIBLE_TIME - elapsed

    if (remaining <= 0) {
      setShowLoader(false)
    } else {
      hideTimerRef.current = window.setTimeout(() => {
        setShowLoader(false)
      }, remaining)
    }
  }

  return (
    <Box
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      drawable
      variant="solid"
      intent="tertiary"
      color="gray"
      blockSize={AVATAR_SIZES_MAP[size || 'md'].side}
      inlineSize={AVATAR_SIZES_MAP[size || 'md'].side}
      borderRadius={shape === 'round' ? '50%' : undefined}
      position="relative"
      overflow="hidden"
    >
      {fetchStatus !== 'error' ? (
        <Image
          tagRef={imgRef}
          src={src}
          alt={alt}
          title={title}
          loading={loading}
          decoding={decoding}
          fetchPriority={fetchPriority}
          crossOrigin={crossOrigin}
          referrerPolicy={referrerPolicy}
          objectFit={objectFit}
          objectPosition={objectPosition}
          onLoad={() => resolveImage('success')}
          onError={() => resolveImage('error')}
        />
      ) : null}
      {showLoader ? (
        <Loader centered active={showLoader} color="blue" />
      ) : initials && fetchStatus !== 'pending' && fetchStatus !== 'success' ? (
        <Text
          tagAttrs={{
            style: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            },
          }}
          fontSize={AVATAR_SIZES_MAP[size || 'md'].fontSize}
          intent="primary"
          color="blue"
          bold
        >
          {initials.trim().slice(0, 2).toUpperCase()}
        </Text>
      ) : null}
    </Box>
  )
}

Avatar.displayName = 'Avatar'
