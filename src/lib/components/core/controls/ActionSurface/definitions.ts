import { BoxProps } from 'lib/components'

export const ACTION_SURFACE_TAGS = ['button', 'a', 'div'] as const

export type ActionSurfaceTag = (typeof ACTION_SURFACE_TAGS)[number]

type ActionSurfaceOwnProps = {
  selected?: boolean
}

type PropsFromBox<T extends ActionSurfaceTag = 'button'> = Pick<
  BoxProps<T>,
  | 'children'
  | 'tag'
  | 'tagAttrs'
  | 'tagRef'
  | 'blockSize'
  | 'minBlockSize'
  | 'maxBlockSize'
  | 'color'
  | 'disabled'
  | 'elevated'
  | 'hidden'
  | 'inlineSize'
  | 'minInlineSize'
  | 'maxInlineSize'
  | 'intent'
  | 'variant'
>

export type ActionSurfaceProps<T extends ActionSurfaceTag = 'button'> = PropsFromBox<T> & ActionSurfaceOwnProps
