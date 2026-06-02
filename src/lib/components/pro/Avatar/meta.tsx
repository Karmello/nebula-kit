import { IMAGE_META } from 'lib/components/core/Image/meta'
import { ComponentMeta } from 'client/definitions'

import { Avatar } from './avatar'
import { AVATAR_SHAPES, AVATAR_SIZES, type AvatarProps, DEFAULT_AVATAR_SHAPE, DEFAULT_AVATAR_SIZE } from './definitions'

export const AVATAR_META = {
  Avatar: {
    overview: {
      bundle: 'pro',
      title: 'User image component with consistent sizing, shape and fallback behavior.',
      features: [
        'fixed size scale with predictable dimensions',
        'round or square shape',
        'optional initials fallback when image is unavailable or fails to load',
        'built-in loading indicator with delay and minimum display time',
      ],
      composedOf: ['Box', 'Image', 'Text', 'Loader'],
      topLevelTags: ['div'],
    },
    props: {
      alt: IMAGE_META.Image.props.alt,
      crossOrigin: IMAGE_META.Image.props.crossOrigin,
      decoding: IMAGE_META.Image.props.decoding,
      fetchPriority: IMAGE_META.Image.props.fetchPriority,
      initials: {
        options: ['string'],
        description: 'Text displayed as a fallback when the image fails to load or src is not provided.',
      },
      loading: IMAGE_META.Image.props.loading,
      objectFit: IMAGE_META.Image.props.objectFit,
      objectPosition: IMAGE_META.Image.props.objectPosition,
      referrerPolicy: IMAGE_META.Image.props.referrerPolicy,
      shape: {
        options: AVATAR_SHAPES as never,
        defaultValue: DEFAULT_AVATAR_SHAPE,
        description: "Controls the avatar's outer shape. Use round for a circular avatar or square for a rectangular one.",
      },
      size: {
        options: AVATAR_SIZES,
        defaultValue: DEFAULT_AVATAR_SIZE,
        description: "Controls the avatar's overall dimensions using the predefined size scale.",
      },
      src: IMAGE_META.Image.props.src,
      tagAttrs: IMAGE_META.Image.props.tagAttrs,
      tagRef: IMAGE_META.Image.props.tagRef,
      title: IMAGE_META.Image.props.title,
    },
    examples: [
      {
        code: '<Avatar src={src} size="sm" />',
        skip: true,
      },
      {
        description: 'Defalt medium size.',
        jsx: <Avatar src="/imgs/mj23.webp" />,
      },
      {
        description: 'The smallest size.',
        jsx: <Avatar src="/imgs/mj23.webp" size="xs" />,
      },
      {
        description: 'The biggest size.',
        jsx: <Avatar src="/imgs/mj23.webp" size="2xl" />,
      },
      {
        description: 'Displaying initials as a fallback when the image cannot be loaded.',
        jsx: <Avatar src="wrong-img-src" initials="mj" />,
      },
      {
        description: 'Square shape.',
        jsx: <Avatar src="/imgs/mj23.webp" shape="square" />,
      },
    ],
    changelog: {
      '0.4.0': ['released'],
    },
  } as ComponentMeta<AvatarProps>,
}
