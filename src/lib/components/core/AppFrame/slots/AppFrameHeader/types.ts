import type { BoxColor, BoxIntent, BoxProps } from '../../../Box/types'
import { type AppFrameProps } from '../../types'

export type AppFrameHeaderProps = {
  // own
  color?: BoxColor
  intent?: BoxIntent
  // Box
  elemAttrs?: BoxProps<'header'>['elemAttrs']
  elemRef?: BoxProps<'header'>['elemRef']
  children: BoxProps<'header'>['children']
}

export type AppFrameHeaderInternalProps = {
  stickyHeader?: AppFrameProps['stickyHeader']
}
