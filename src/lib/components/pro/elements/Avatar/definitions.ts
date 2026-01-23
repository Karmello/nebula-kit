import { ImageProps } from 'lib/components'
import { TextScale, TextTypography } from 'lib/components/core/base/Text'
import { Sizes } from 'lib/definitions'

export const AVATAR_SIZES_MAP: Record<
  AvatarSize,
  { side: string; typography: TextTypography; scale: TextScale }
> = {
  xs: {
    side: '50px',
    typography: 'lead',
    scale: 'compact',
  },
  sm: {
    side: '75px',
    typography: 'h6',
    scale: 'regular',
  },
  md: {
    side: '125px',
    typography: 'h3',
    scale: 'regular',
  },
  lg: {
    side: '175px',
    typography: 'h2',
    scale: 'regular',
  },
  xl: {
    side: '225px',
    typography: 'h1',
    scale: 'regular',
  },
  xxl: {
    side: '300px',
    typography: 'h1',
    scale: 'regular',
  },
}

export const LOADER_DELAY = 150
export const MIN_LOADER_VISIBLE_TIME = 300

export const AVATAR_SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const satisfies Sizes[]
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
