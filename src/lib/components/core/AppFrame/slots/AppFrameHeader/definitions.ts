import { AppFrameProps } from 'lib/components'
import { BoxColor, BoxIntent } from 'lib/components/core/Box'
import { BoxProps } from 'lib/index.core'

export const DEFAULT_APP_FRAME_HEADER_INTENT: AppFrameHeaderProps['intent'] = 'muted'

export type AppFrameHeaderProps = Pick<BoxProps<'header'>, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<'header'>['children']
  color?: BoxColor
  intent?: BoxIntent
}

export type AppFrameHeaderInternalProps = Pick<AppFrameProps, 'stickyHeader'>
