import {
  AVATAR_SHAPES,
  DEFAULT_AVATAR_SHAPE,
  DEFAULT_AVATAR_SIZE,
} from 'lib/components/pro/Avatar/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { AvatarProps } from 'lib/index.pro'
import type { Prop } from 'client/definitions'

import { IMAGE_META } from '../Image'

export const AVATAR_PROPS: Record<keyof AvatarProps, Prop> = {
  alt: IMAGE_META.props.alt,
  crossOrigin: IMAGE_META.props.crossOrigin,
  decoding: IMAGE_META.props.decoding,
  fetchPriority: IMAGE_META.props.fetchPriority,
  initials: {
    options: ['string'],
    description:
      'Text displayed as a fallback when the image fails to load or src is not provided.',
  },
  loading: IMAGE_META.props.loading,
  objectFit: IMAGE_META.props.objectFit,
  objectPosition: IMAGE_META.props.objectPosition,
  referrerPolicy: IMAGE_META.props.referrerPolicy,
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
  src: IMAGE_META.props.src,
  tagAttrs: IMAGE_META.props.tagAttrs,
  tagRef: IMAGE_META.props.tagRef,
  title: IMAGE_META.props.title,
}
