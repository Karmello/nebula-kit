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
  alt: {
    options: ['string'],
    description: 'Alternative text describing the image for accessibility.',
  },
  aspectRatio: {
    options: ['string'],
    isResponsive: true,
    description: 'Defines the preferred width-to-height ratio of the component.',
    link: true,
  },
  blockSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical height.',
    link: true,
  },
  borderRadius: {
    options: ['string'],
    isResponsive: true,
    description: 'Sets border radius overriding global value set by NebkitProvider.',
    link: true,
  },
  crossOrigin: {
    options: IMAGE_CROSS_ORIGIN,
    description: 'Controls the CORS mode used when fetching the image.',
  },
  decoding: {
    options: IMAGE_DECODING,
    description: 'Hints how the browser should decode the image.',
  },
  display: {
    options: CSS_DISPLAY,
    isResponsive: true,
    description: 'Display type controlling how the component is laid out.',
    link: true,
  },
  fetchPriority: {
    options: IMAGE_FETCH_PRIORITY,
    description: 'Hints the browser about the relative priority of fetching the image.',
  },
  inlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical width.',
    link: true,
  },
  loading: {
    options: IMAGE_LOADING,
    description: 'Controls whether the image is loaded eagerly or lazily by the browser.',
  },
  maxBlockSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Maximum logical height.',
    link: true,
  },
  maxInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Maximum logical width.',
    link: true,
  },
  minBlockSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Minimum logical height.',
    link: true,
  },
  minInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Minimum logical width.',
    link: true,
  },
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
  opacity: {
    options: ['string'],
    isResponsive: true,
    description: 'Transparency level, from fully visible to fully transparent.',
    link: true,
  },
  overflow: {
    options: CSS_OVERFLOW,
    isResponsive: true,
    description: 'Overflow behavior for both axes.',
    link: true,
  },
  overflowX: {
    options: CSS_OVERFLOW,
    isResponsive: true,
    description: 'Overflow behavior on the horizontal axis.',
    link: true,
  },
  overflowY: {
    options: CSS_OVERFLOW,
    isResponsive: true,
    description: 'Overflow behavior on the vertical axis.',
    link: true,
  },
  pointerEvents: {
    options: CSS_POINTER_EVENTS,
    description: 'Controls whether the element can receive pointer interactions.',
    link: true,
  },
  referrerPolicy: {
    options: IMAGE_REFERRER_POLICY,
    description: 'Controls which referrer information is sent when fetching the image.',
  },
  src: {
    options: ['string'],
    description: 'Source URL of the image.',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
  title: {
    options: ['string'],
    description: 'Supplementary text associated with the image.',
  },
}
