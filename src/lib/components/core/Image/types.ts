import { SyntheticEvent } from 'react'

import { RespValue } from 'lib/types'

import { BoxProps } from '../Box'
import {
  IMAGE_CROSS_ORIGIN,
  IMAGE_DECODING,
  IMAGE_FETCH_PRIORITY,
  IMAGE_LOADING,
  IMAGE_OBJECT_FIT,
  IMAGE_REFERRER_POLICY,
} from './constants'

type ImageLoading = (typeof IMAGE_LOADING)[number]
type ImageDecoding = (typeof IMAGE_DECODING)[number]
type ImageCrossOrigin = (typeof IMAGE_CROSS_ORIGIN)[number]
type ImageObjectFit = (typeof IMAGE_OBJECT_FIT)[number]
type ImageReferrerPolicy = (typeof IMAGE_REFERRER_POLICY)[number]
type ImageFetchPriority = (typeof IMAGE_FETCH_PRIORITY)[number]

export type ImageProps = {
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
} & Pick<
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
