import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import {
  type ImageProps,
  IMAGE_CROSS_ORIGIN,
  IMAGE_DECODING,
  IMAGE_FETCH_PRIORITY,
  IMAGE_LOADING,
  IMAGE_OBJECT_FIT,
  IMAGE_REFERRER_POLICY,
} from '../definitions'

import { BOX_PROPS_META } from '../../Box/meta/props'

const IMAGE_PROPS_META: ComponentMeta<ImageProps>['props'] = {
  alt: {
    options: ['string'],
    description: 'Alternative text describing the image for accessibility.',
  },
  aspectRatio: BOX_PROPS_META.aspectRatio,
  blockSize: BOX_PROPS_META.blockSize,
  borderRadius: BOX_PROPS_META.borderRadius,
  crossOrigin: {
    options: IMAGE_CROSS_ORIGIN,
    description: 'Controls the CORS mode used when fetching the image.',
  },
  decoding: {
    options: IMAGE_DECODING,
    description: 'Hints how the browser should decode the image.',
  },
  display: BOX_PROPS_META.display,
  fetchPriority: {
    options: IMAGE_FETCH_PRIORITY,
    description: 'Hints the browser about the relative priority of fetching the image.',
  },
  inlineSize: BOX_PROPS_META.inlineSize,
  loading: {
    options: IMAGE_LOADING,
    description: 'Controls whether the image is loaded eagerly or lazily by the browser.',
  },
  maxBlockSize: BOX_PROPS_META.maxBlockSize,
  maxInlineSize: BOX_PROPS_META.maxInlineSize,
  minBlockSize: BOX_PROPS_META.minBlockSize,
  minInlineSize: BOX_PROPS_META.minInlineSize,
  objectFit: {
    options: IMAGE_OBJECT_FIT,
    isResponsive: true,
    description: 'Defines how the image is resized to fit its container.',
    link: true,
  },
  objectPosition: {
    options: [DOCS_CSS_LABEL],
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
  opacity: BOX_PROPS_META.opacity,
  overflow: BOX_PROPS_META.overflow,
  overflowX: BOX_PROPS_META.overflowX,
  overflowY: BOX_PROPS_META.overflowY,
  pointerEvents: BOX_PROPS_META.pointerEvents,
  referrerPolicy: {
    options: IMAGE_REFERRER_POLICY,
    description: 'Controls which referrer information is sent when fetching the image.',
  },
  src: {
    options: ['string'],
    description: 'Source URL of the image.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  title: {
    options: ['string'],
    description: 'Supplementary text associated with the image.',
  },
}

export { IMAGE_PROPS_META }
