import { BoxProps } from 'lib/components/core/Box'
import { IMAGE_OBJECT_FIT } from 'lib/components/core/Image/constants'
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

export const DEFAULT_AVATAR_SIZE: TShirtSize = 'md'
export const DEFAULT_AVATAR_SHAPE: (typeof AVATAR_SHAPES)[number] = 'round'
export const DEFAULT_AVATAR_OBJECT_FIT: (typeof IMAGE_OBJECT_FIT)[number] = 'cover'
export const DEFAULT_AVATAR_OBJECT_POSITION = 'center'
