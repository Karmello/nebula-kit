import { SyntheticEvent } from 'react'

import { RespValue } from 'lib/definitions'

import type { BoxProps } from '../Box/definitions'

export const IMAGE_LOADING = ['eager', 'lazy'] as const
export const IMAGE_DECODING = ['sync', 'async', 'auto'] as const
export const IMAGE_CROSS_ORIGIN = ['anonymous', 'use-credentials'] as const
export const IMAGE_OBJECT_FIT = ['cover', 'contain', 'fill', 'none', 'scale-down'] as const
export const IMAGE_FETCH_PRIORITY = ['high', 'low', 'auto'] as const

export const IMAGE_REFERRER_POLICY = [
  'no-referrer',
  'no-referrer-when-downgrade',
  'origin',
  'origin-when-cross-origin',
  'same-origin',
  'strict-origin',
  'strict-origin-when-cross-origin',
  'unsafe-url',
] as const

type ImageLoading = (typeof IMAGE_LOADING)[number]
type ImageDecoding = (typeof IMAGE_DECODING)[number]
type ImageCrossOrigin = (typeof IMAGE_CROSS_ORIGIN)[number]
type ImageObjectFit = (typeof IMAGE_OBJECT_FIT)[number]
type ImageReferrerPolicy = (typeof IMAGE_REFERRER_POLICY)[number]
type ImageFetchPriority = (typeof IMAGE_FETCH_PRIORITY)[number]

type PropsFromBox = Pick<
  BoxProps<'img'>,
  | 'tagAttrs'
  | 'tagRef'
  | 'inlineSize'
  | 'minInlineSize'
  | 'maxInlineSize'
  | 'blockSize'
  | 'minBlockSize'
  | 'maxBlockSize'
  | 'display'
  | 'opacity'
  | 'borderRadius'
  | 'pointerEvents'
  | 'overflow'
  | 'overflowX'
  | 'overflowY'
  | 'aspectRatio'
>

type ImageOwnProps = {
  src?: string
  alt?: string
  title?: string
  loading?: ImageLoading
  decoding?: ImageDecoding
  crossOrigin?: ImageCrossOrigin
  referrerPolicy?: ImageReferrerPolicy
  fetchPriority?: ImageFetchPriority
  objectFit?: RespValue<ImageObjectFit>
  objectPosition?: RespValue<string>
  onLoad?: (e: SyntheticEvent<HTMLImageElement>) => void
  onError?: (e: SyntheticEvent<HTMLImageElement>) => void
}

export type ImageProps = PropsFromBox & ImageOwnProps
