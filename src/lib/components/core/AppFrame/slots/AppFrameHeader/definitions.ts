import { BoxColor, BoxIntent, BoxProps } from '../../../Box/types'
import { AppFrameProps } from '../../definitions'

export const DEFAULT_APP_FRAME_HEADER_INTENT: AppFrameHeaderProps['intent'] = 'muted'

export type AppFrameHeaderProps = Pick<BoxProps<'header'>, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<'header'>['children']
  color?: BoxColor
  intent?: BoxIntent
}

export type AppFrameHeaderInternalProps = Pick<AppFrameProps, 'stickyHeader'>
