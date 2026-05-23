import { BoxProps, ImageProps } from 'lib/components'
import { TShirtSize } from 'lib/definitions'

export const AVATAR_SIZES_MAP: Record<AvatarSize, { side: BoxProps['blockSize']; fontSize: string }> = {
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
  '2xl': {
    side: '300px',
    fontSize: '80px',
  },
}

export const LOADER_DELAY = 150
export const MIN_LOADER_VISIBLE_TIME = 300

export const AVATAR_SIZES = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const satisfies TShirtSize[]
export const AVATAR_SHAPES = ['round', 'square'] as const

export const DEFAULT_AVATAR_SIZE: AvatarProps['size'] = 'md'
export const DEFAULT_AVATAR_SHAPE: AvatarProps['shape'] = 'round'
export const DEFAULT_AVATAR_OBJECT_FIT: AvatarProps['objectFit'] = 'cover'
export const DEFAULT_AVATAR_OBJECT_POSITION: AvatarProps['objectPosition'] = 'center'

export type AvatarSize = (typeof AVATAR_SIZES)[number]
export type AvatarShape = (typeof AVATAR_SHAPES)[number]

type PropsFromImage = Pick<
  ImageProps,
  | 'tagAttrs'
  | 'tagRef'
  | 'src'
  | 'alt'
  | 'title'
  | 'loading'
  | 'decoding'
  | 'fetchPriority'
  | 'crossOrigin'
  | 'referrerPolicy'
  | 'objectFit'
  | 'objectPosition'
>

type AvatarOwnProps = {
  size?: AvatarSize
  shape?: AvatarShape
  initials?: string
}

export type AvatarProps = PropsFromImage & AvatarOwnProps
