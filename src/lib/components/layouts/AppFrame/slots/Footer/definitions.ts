import { BoxProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'

export const APP_FRAME_FOOTER_INHERITED_PROPS = {
  Box: [
    'children',
    'elemProps',
    'elemRef',
    'intent',
    'minBlockSize',
    'padding',
    'paddingInline',
    'paddingBlock',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
  ] as const satisfies readonly (keyof BoxProps<'div'>)[],
}

export type AppFrameFooterInheritedProps = MakeRequired<
  Pick<BoxProps<'div'>, (typeof APP_FRAME_FOOTER_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type AppFrameFooterProps = AppFrameFooterInheritedProps
