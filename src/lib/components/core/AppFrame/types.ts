import { type BoxProps } from '../Box/types'

export type AppFrameProps = {
  // own
  stickyHeader?: boolean
  // Box
  tagAttrs?: BoxProps['tagAttrs']
  tagRef?: BoxProps['tagRef']
  children: BoxProps['children']
}
