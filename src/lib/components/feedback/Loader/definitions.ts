import { BoxProps, HtmlTagProps } from 'lib/components'
import { ScaleValue, Sizes } from 'lib/definitions'

export const DEFAULT_LOADER_SIZE: LoaderProps['size'] = 'md'

export const LOADER_SIZE_CONFIG: Record<LoaderSize, ScaleValue> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
}

export const LOADER_SIZES = ['xs', 'sm', 'md', 'lg'] as const satisfies Sizes[]

export type LoaderSize = (typeof LOADER_SIZES)[number]

type LoaderOwnProps = {
  size?: LoaderSize
  centered?: boolean
}

type PropsFromHtmlTag = Pick<HtmlTagProps, 'tagAttrs' | 'tagRef'>

type PropsFromBox = Pick<BoxProps, 'color'>

export type LoaderProps = PropsFromHtmlTag & PropsFromBox & LoaderOwnProps
