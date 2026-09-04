import { ImageProps } from 'lib/components/core/Image'
import { TShirtSize } from 'lib/types'

import { AVATAR_SHAPES } from './constants'

export type AvatarShape = (typeof AVATAR_SHAPES)[number]

export type AvatarProps = {
  // own
  size?: TShirtSize
  shape?: AvatarShape
  initials?: string
  // Image
  tagAttrs?: ImageProps['tagAttrs']
  tagRef?: ImageProps['tagRef']
  src?: ImageProps['src']
  alt?: ImageProps['alt']
  title?: ImageProps['title']
  loading?: ImageProps['loading']
  decoding?: ImageProps['decoding']
  fetchPriority?: ImageProps['fetchPriority']
  crossOrigin?: ImageProps['crossOrigin']
  referrerPolicy?: ImageProps['referrerPolicy']
  objectFit?: ImageProps['objectFit']
  objectPosition?: ImageProps['objectPosition']
}
