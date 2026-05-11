import { BoxProps } from 'lib/components'

export const ACTION_SURFACE_TAGS = ['button', 'a', 'div'] as const

export type ActionSurfaceTag = (typeof ACTION_SURFACE_TAGS)[number]

type ActionSurfaceOwnProps = {
  title: string
}

type PropsFromBox<T extends ActionSurfaceTag = 'button'> = Pick<BoxProps<T>, 'tag' | 'tagAttrs' | 'tagRef'>

export type ActionSurfaceProps<T extends ActionSurfaceTag = 'button'> = PropsFromBox<T> & ActionSurfaceOwnProps
