import { BoxProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'

export const APP_FRAME_HEADER_INHERITED_PROPS = {
  Box: [
    'children',
    'tagAttrs',
    'tagRef',
    'intent',
    'minBlockSize',
  ] as const satisfies readonly (keyof BoxProps<'header'>)[],
}

export type AppFrameHeaderInheritedProps = MakeRequired<
  Pick<BoxProps<'header'>, (typeof APP_FRAME_HEADER_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type AppFrameHeaderProps = AppFrameHeaderInheritedProps
