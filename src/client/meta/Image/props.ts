import {
  IMAGE_CROSS_ORIGIN,
  IMAGE_DECODING,
  IMAGE_FETCH_PRIORITY,
  IMAGE_LOADING,
  IMAGE_OBJECT_FIT,
  IMAGE_REFERRER_POLICY,
} from 'lib/components/core/Image/constants'
import { ImageProps } from 'lib/index.core'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const IMAGE_PROPS: Record<keyof ImageProps, Prop> = {
  alt: {
    options: ['string'],
    description: 'Alternative text describing the image for accessibility.',
  },
  aspectRatio: BOX_META.props.aspectRatio,
  blockSize: BOX_META.props.blockSize,
  borderRadius: BOX_META.props.borderRadius,
  crossOrigin: {
    options: IMAGE_CROSS_ORIGIN,
    description: 'Controls the CORS mode used when fetching the image.',
  },
  decoding: {
    options: IMAGE_DECODING,
    description: 'Hints how the browser should decode the image.',
  },
  display: BOX_META.props.display,
  fetchPriority: {
    options: IMAGE_FETCH_PRIORITY,
    description: 'Hints the browser about the relative priority of fetching the image.',
  },
  inlineSize: BOX_META.props.inlineSize,
  loading: {
    options: IMAGE_LOADING,
    description: 'Controls whether the image is loaded eagerly or lazily by the browser.',
  },
  maxBlockSize: BOX_META.props.maxBlockSize,
  maxInlineSize: BOX_META.props.maxInlineSize,
  minBlockSize: BOX_META.props.minBlockSize,
  minInlineSize: BOX_META.props.minInlineSize,
  objectFit: {
    options: IMAGE_OBJECT_FIT,
    isResponsive: true,
    description: 'Defines how the image is resized to fit its container.',
    link: true,
  },
  objectPosition: {
    options: ['string'],
    isResponsive: true,
    description: 'Sets the alignment of the image within its container.',
    link: true,
  },
  onError: {
    options: ['e => void'],
    description: 'Called when the underlying img element fires an error event.',
  },
  onLoad: {
    options: ['e => void'],
    description: 'Called when the underlying img element fires a load event.',
  },
  opacity: BOX_META.props.opacity,
  overflow: BOX_META.props.overflow,
  overflowX: BOX_META.props.overflowX,
  overflowY: BOX_META.props.overflowY,
  pointerEvents: BOX_META.props.pointerEvents,
  referrerPolicy: {
    options: IMAGE_REFERRER_POLICY,
    description: 'Controls which referrer information is sent when fetching the image.',
  },
  src: {
    options: ['string'],
    description: 'Source URL of the image.',
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
  title: {
    options: ['string'],
    description: 'Supplementary text associated with the image.',
  },
}
