import { BoxProps } from 'lib/components'

export const DEFAULT_APP_FRAME_HEADER_INTENT: AppFrameHeaderProps['intent'] = 'muted'

type PropsFromBox = Pick<BoxProps<'header'>, 'tagAttrs' | 'tagRef' | 'color' | 'intent'> & {
  children: BoxProps<'header'>['children']
}

export type AppFrameHeaderProps = PropsFromBox
