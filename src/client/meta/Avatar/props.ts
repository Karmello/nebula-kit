import {
  IMAGE_CROSS_ORIGIN,
  IMAGE_DECODING,
  IMAGE_FETCH_PRIORITY,
  IMAGE_LOADING,
  IMAGE_OBJECT_FIT,
  IMAGE_REFERRER_POLICY,
} from 'lib/components/core/Image/constants'
import {
  AVATAR_SHAPES,
  DEFAULT_AVATAR_SHAPE,
  DEFAULT_AVATAR_SIZE,
} from 'lib/components/pro/Avatar/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { AvatarProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

export const AVATAR_PROPS: Record<keyof AvatarProps, DocProp> = {
  alt: {
    options: ['string'],
    description: 'Alternative text describing the image for accessibility.',
  },
  crossOrigin: {
    options: IMAGE_CROSS_ORIGIN,
    description: 'Controls the CORS mode used when fetching the image.',
  },
  decoding: {
    options: IMAGE_DECODING,
    description: 'Hints how the browser should decode the image.',
  },
  fetchPriority: {
    options: IMAGE_FETCH_PRIORITY,
    description: 'Hints the browser about the relative priority of fetching the image.',
  },
  initials: {
    options: ['string'],
    description:
      'Text displayed as a fallback when the image fails to load or src is not provided.',
  },
  loading: {
    options: IMAGE_LOADING,
    description: 'Controls whether the image is loaded eagerly or lazily by the browser.',
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
  referrerPolicy: {
    options: IMAGE_REFERRER_POLICY,
    description: 'Controls which referrer information is sent when fetching the image.',
  },
  shape: {
    options: AVATAR_SHAPES as never,
    defaultValue: DEFAULT_AVATAR_SHAPE,
    description:
      "Controls the avatar's outer shape. Use round for a circular avatar or square for a rectangular one.",
  },
  size: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_AVATAR_SIZE,
    description: "Controls the avatar's overall dimensions using the predefined size scale.",
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
