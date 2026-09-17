import {
  IMAGE_CROSS_ORIGIN,
  IMAGE_DECODING,
  IMAGE_FETCH_PRIORITY,
  IMAGE_LOADING,
  IMAGE_OBJECT_FIT,
  IMAGE_REFERRER_POLICY,
} from 'lib/components/core/Image/constants'
import { CSS_DISPLAY, CSS_OVERFLOW, CSS_POINTER_EVENTS } from 'lib/constants'
import { ImageProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const IMAGE_PROPS: Record<keyof ImageProps, DocProp> = {
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  // source
  src: {
    options: ['string'],
    description: 'Source URL of the image.',
    group: 'source',
  },
  alt: {
    options: ['string'],
    description: 'Alternative text describing the image for accessibility.',
    group: 'source',
  },
  title: {
    options: ['string'],
    description: 'Supplementary text associated with the image.',
    group: 'source',
  },
  // loading
  loading: {
    options: IMAGE_LOADING,
    description: 'Controls whether the image is loaded eagerly or lazily by the browser.',
    group: 'loading',
  },
  decoding: {
    options: IMAGE_DECODING,
    description: 'Hints how the browser should decode the image.',
    group: 'loading',
  },
  fetchPriority: {
    options: IMAGE_FETCH_PRIORITY,
    description: 'Hints the browser about the relative priority of fetching the image.',
    group: 'loading',
  },
  crossOrigin: {
    options: IMAGE_CROSS_ORIGIN,
    description: 'Controls the CORS mode used when fetching the image.',
    group: 'loading',
  },
  referrerPolicy: {
    options: IMAGE_REFERRER_POLICY,
    description: 'Controls which referrer information is sent when fetching the image.',
    group: 'loading',
  },
  onLoad: {
    options: ['e => void'],
    description: 'Called when the underlying img element fires a load event.',
    group: 'loading',
  },
  onError: {
    options: ['e => void'],
    description: 'Called when the underlying img element fires an error event.',
    group: 'loading',
  },
  // object
  objectFit: {
    options: IMAGE_OBJECT_FIT,
    isResponsive: true,
    description: 'Defines how the image is resized to fit its container.',
    link: true,
    group: 'object',
  },
  objectPosition: {
    options: ['string'],
    isResponsive: true,
    description: 'Sets the alignment of the image within its container.',
    link: true,
    group: 'object',
  },
  // appearance
  aspectRatio: {
    options: ['string'],
    isResponsive: true,
    description: 'Defines the preferred width-to-height ratio of the component.',
    link: true,
    group: 'appearance',
  },
  opacity: {
    options: ['string'],
    isResponsive: true,
    description: 'Transparency level, from fully visible to fully transparent.',
    link: true,
    group: 'appearance',
  },
  borderRadius: {
    options: ['string'],
    isResponsive: true,
    description: 'Sets border radius overriding global value set by NebkitProvider.',
    link: true,
    group: 'appearance',
  },
  // layout
  display: {
    options: CSS_DISPLAY,
    isResponsive: true,
    description: 'Display type controlling how the component is laid out.',
    link: true,
    group: 'layout',
  },
  overflow: {
    options: CSS_OVERFLOW,
    isResponsive: true,
    description: 'Overflow behavior for both axes.',
    link: true,
    group: 'layout',
  },
  overflowX: {
    options: CSS_OVERFLOW,
    isResponsive: true,
    description: 'Overflow behavior on the horizontal axis.',
    link: true,
    group: 'layout',
  },
  overflowY: {
    options: CSS_OVERFLOW,
    isResponsive: true,
    description: 'Overflow behavior on the vertical axis.',
    link: true,
    group: 'layout',
  },
  // interaction
  pointerEvents: {
    options: CSS_POINTER_EVENTS,
    description: 'Controls whether the element can receive pointer interactions.',
    link: true,
    group: 'interaction',
  },
  // size
  blockSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical height.',
    link: true,
    group: 'size',
  },
  minBlockSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Minimum logical height.',
    link: true,
    group: 'size',
  },
  maxBlockSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Maximum logical height.',
    link: true,
    group: 'size',
  },
  inlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical width.',
    link: true,
    group: 'size',
  },
  minInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Minimum logical width.',
    link: true,
    group: 'size',
  },
  maxInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Maximum logical width.',
    link: true,
    group: 'size',
  },
}
