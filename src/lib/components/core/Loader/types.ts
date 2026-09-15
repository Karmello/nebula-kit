import { type BoxProps } from '../Box'

export type LoaderProps = {
  // own
  active?: boolean
  size?: string
  centered?: boolean
  // Box
  tagAttrs?: BoxProps['tagAttrs']
  tagRef?: BoxProps['tagRef']
  color?: BoxProps['color']
}
