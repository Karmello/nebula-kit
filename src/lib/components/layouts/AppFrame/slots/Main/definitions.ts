import { BoxProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'

export const APP_FRAME_MAIN_INHERITED_PROPS = {
  Box: [
    'children',
    'elemProps',
    'elemRef',
    'padding',
    'paddingInline',
    'paddingBlock',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
  ] as const satisfies readonly (keyof BoxProps<'div'>)[],
}

export type AppFrameMainInheritedProps = MakeRequired<
  Pick<BoxProps<'div'>, (typeof APP_FRAME_MAIN_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type AppFrameMainProps = AppFrameMainInheritedProps
