import { BoxProps, HtmlTagProps } from 'lib/components'
import { Size } from 'lib/definitions'

export const DEFAULT_LOADER_SIZE: LoaderProps['size'] = 'md'
export const DEFAULT_LOADER_ACTIVE: LoaderProps['active'] = true

export const LOADER_SIZE_CONFIG: Record<LoaderSize, string> = {
  xs: '12px',
  sm: '16px',
  md: '20px',
  lg: '24px',
}

export const LOADER_SIZES = ['xs', 'sm', 'md', 'lg'] as const satisfies Size[]

export type LoaderSize = (typeof LOADER_SIZES)[number]

type LoaderOwnProps = {
  active?: boolean
  size?: LoaderSize
  centered?: boolean
}

type PropsFromHtmlTag = Pick<HtmlTagProps, 'tagAttrs' | 'tagRef'>

type PropsFromBox = Pick<BoxProps, 'color'>

export type LoaderProps = PropsFromHtmlTag & PropsFromBox & LoaderOwnProps
