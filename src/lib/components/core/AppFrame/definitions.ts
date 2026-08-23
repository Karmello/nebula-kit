import { type BoxProps } from '../Box/types'

export type AppFrameProps = {
  // Box
  tagAttrs?: BoxProps['tagAttrs']
  tagRef?: BoxProps['tagRef']
  children: BoxProps['children']
  // own
  stickyHeader?: boolean
}
