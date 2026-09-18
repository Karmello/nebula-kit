import { type BoxProps } from '../Box'

export type LoaderProps = {
  // own
  active?: boolean
  size?: string
  centered?: boolean
  // Box
  elemAttrs?: BoxProps['elemAttrs']
  elemRef?: BoxProps['elemRef']
  color?: BoxProps['color']
}
