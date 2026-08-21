import { type BoxProps } from '../Box'

export const DEFAULT_LOADER_SIZE: LoaderProps['size'] = '24px'
export const DEFAULT_LOADER_ACTIVE: LoaderProps['active'] = true

export type LoaderProps = Pick<BoxProps, 'tagAttrs' | 'tagRef' | 'color'> & {
  active?: boolean
  size?: string
  centered?: boolean
}
