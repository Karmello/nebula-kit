import type { BoxColor, BoxIntent, BoxProps } from '../../../Box/types'
import { type AppFrameProps } from '../../definitions'

export const DEFAULT_APP_FRAME_HEADER_INTENT: AppFrameHeaderProps['intent'] = 'muted'

export type AppFrameHeaderProps = {
  // own
  color?: BoxColor
  intent?: BoxIntent
  // Box
  tagAttrs?: BoxProps<'header'>['tagAttrs']
  tagRef?: BoxProps<'header'>['tagRef']
  children: BoxProps<'header'>['children']
}

export type AppFrameHeaderInternalProps = {
  stickyHeader?: AppFrameProps['stickyHeader']
}
