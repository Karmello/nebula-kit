import { BoxProps } from 'lib/components'
import { TShirtSize } from 'lib/types'

export const DEFAULT_LOADER_SIZE: LoaderProps['size'] = 'md'
export const DEFAULT_LOADER_ACTIVE: LoaderProps['active'] = true

export const LOADER_SIZES = ['sm', 'md', 'lg', 'xl', '2xl'] as const satisfies TShirtSize[]

export type LoaderSize = (typeof LOADER_SIZES)[number] | string

type LoaderOwnProps = {
  active?: boolean
  size?: LoaderSize
  centered?: boolean
}

type PropsFromBox = Pick<BoxProps, 'tagAttrs' | 'tagRef' | 'color'>

export type LoaderProps = PropsFromBox & LoaderOwnProps
