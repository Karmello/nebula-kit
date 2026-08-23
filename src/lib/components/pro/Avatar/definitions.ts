import { BoxProps, ImageProps } from 'lib/index.core'
import { TShirtSize } from 'lib/types'

export const AVATAR_SIZES_MAP: Record<
  TShirtSize,
  { side: BoxProps['blockSize']; fontSize: string }
> = {
  xs: {
    side: '50px',
    fontSize: '20px',
  },
  sm: {
    side: '75px',
    fontSize: '30px',
  },
  md: {
    side: '125px',
    fontSize: '45px',
  },
  lg: {
    side: '175px',
    fontSize: '55px',
  },
  xl: {
    side: '225px',
    fontSize: '70px',
  },
}

export const LOADER_DELAY = 150
export const MIN_LOADER_VISIBLE_TIME = 300

export const AVATAR_SHAPES = ['round', 'square'] as const

export const DEFAULT_AVATAR_SIZE: AvatarProps['size'] = 'md'
export const DEFAULT_AVATAR_SHAPE: AvatarProps['shape'] = 'round'
export const DEFAULT_AVATAR_OBJECT_FIT: AvatarProps['objectFit'] = 'cover'
export const DEFAULT_AVATAR_OBJECT_POSITION: AvatarProps['objectPosition'] = 'center'

export type AvatarShape = (typeof AVATAR_SHAPES)[number]

type PropsFromImage = {
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

type AvatarOwnProps = {
  size?: TShirtSize
  shape?: AvatarShape
  initials?: string
}

export type AvatarProps = PropsFromImage & AvatarOwnProps
