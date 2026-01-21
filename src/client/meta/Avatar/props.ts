import { ComponentMeta } from 'client/definitions'
import { AvatarProps } from 'lib/components'

import {
  AVATAR_SHAPES,
  AVATAR_SIZES,
  DEFAULT_AVATAR_SHAPE,
  DEFAULT_AVATAR_SIZE,
} from 'lib/components/pro/elements/Avatar'

import { IMAGE_PROPS_META } from '../Image/props'

const AVATAR_PROPS_META: ComponentMeta<AvatarProps>['props'] = {
  alt: IMAGE_PROPS_META.alt,
  crossOrigin: IMAGE_PROPS_META.crossOrigin,
  decoding: IMAGE_PROPS_META.decoding,
  fetchPriority: IMAGE_PROPS_META.fetchPriority,
  initials: {
    options: ['string'],
    description: 'Text displayed as a fallback when the image fails to load or src is not provided.',
  },
  loading: IMAGE_PROPS_META.loading,
  objectFit: IMAGE_PROPS_META.objectFit,
  objectPosition: IMAGE_PROPS_META.objectPosition,
  referrerPolicy: IMAGE_PROPS_META.referrerPolicy,
  shape: {
    options: AVATAR_SHAPES as never,
    defaultValue: DEFAULT_AVATAR_SHAPE,
    description:
      "Controls the avatar's outer shape. Use round for a circular avatar or square for a rectangular one.",
  },
  size: {
    options: AVATAR_SIZES,
    defaultValue: DEFAULT_AVATAR_SIZE,
    description: "Controls the avatar's overall dimensions using the predefined size scale.",
  },
  src: IMAGE_PROPS_META.src,
  tagAttrs: IMAGE_PROPS_META.tagAttrs,
  tagRef: IMAGE_PROPS_META.tagRef,
  title: IMAGE_PROPS_META.title,
}

export { AVATAR_PROPS_META }
