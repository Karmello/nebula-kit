import { type BoxProps } from '../Box'

export const DEFAULT_LOADER_SIZE: LoaderProps['size'] = '24px'
export const DEFAULT_LOADER_ACTIVE: LoaderProps['active'] = true

export type LoaderProps = {
  // Box
  tagAttrs?: BoxProps['tagAttrs']
  tagRef?: BoxProps['tagRef']
  color?: BoxProps['color']
  // own
  active?: boolean
  size?: string
  centered?: boolean
}
