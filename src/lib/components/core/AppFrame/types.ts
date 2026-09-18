import { type BoxProps } from '../Box/types'

export type AppFrameProps = {
  // own
  stickyHeader?: boolean
  // Box
  elemAttrs?: BoxProps['elemAttrs']
  elemRef?: BoxProps['elemRef']
  children: BoxProps['children']
}
