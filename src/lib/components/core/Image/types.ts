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
  // own
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
  // Box
  tagAttrs?: BoxProps<'img'>['tagAttrs']
  tagRef?: BoxProps<'img'>['tagRef']
  inlineSize?: BoxProps<'img'>['inlineSize']
  minInlineSize?: BoxProps<'img'>['minInlineSize']
  maxInlineSize?: BoxProps<'img'>['maxInlineSize']
  blockSize?: BoxProps<'img'>['blockSize']
  minBlockSize?: BoxProps<'img'>['minBlockSize']
  maxBlockSize?: BoxProps<'img'>['maxBlockSize']
  display?: BoxProps<'img'>['display']
  opacity?: BoxProps<'img'>['opacity']
  borderRadius?: BoxProps<'img'>['borderRadius']
  pointerEvents?: BoxProps<'img'>['pointerEvents']
  overflow?: BoxProps<'img'>['overflow']
  overflowX?: BoxProps<'img'>['overflowX']
  overflowY?: BoxProps<'img'>['overflowY']
  aspectRatio?: BoxProps<'img'>['aspectRatio']
}
