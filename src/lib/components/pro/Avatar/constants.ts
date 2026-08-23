import { BoxProps } from 'lib/index.core'
import type { AvatarProps } from 'lib/index.pro'
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
