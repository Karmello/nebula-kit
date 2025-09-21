import { GridProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'

export type AppFrameOwnProps = {
  stickyHeader?: boolean
}

export const APP_FRAME_INHERITED_PROPS = {
  Grid: ['children', 'tagAttrs', 'tagRef'] as const satisfies readonly (keyof GridProps<'div'>)[],
}

export type AppFrameInheritedProps = MakeRequired<
  Pick<GridProps<'div'>, (typeof APP_FRAME_INHERITED_PROPS)['Grid'][number]>,
  'children'
>

export type AppFrameProps = AppFrameOwnProps & AppFrameInheritedProps
