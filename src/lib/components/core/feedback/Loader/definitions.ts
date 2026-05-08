import { BoxProps, HtmlTagProps } from 'lib/components'
import { TShirtSize } from 'lib/definitions'

export const DEFAULT_LOADER_SIZE: LoaderProps['size'] = 'md'
export const DEFAULT_LOADER_ACTIVE: LoaderProps['active'] = true

export const LOADER_SIZES = ['sm', 'md', 'lg', 'xl', '2xl'] as const satisfies TShirtSize[]

export type LoaderSize = (typeof LOADER_SIZES)[number] | string

type LoaderOwnProps = {
  active?: boolean
  size?: LoaderSize
  centered?: boolean
}

type PropsFromHtmlTag = Pick<HtmlTagProps, 'tagAttrs' | 'tagRef'>

type PropsFromBox = Pick<BoxProps, 'color'>

export type LoaderProps = PropsFromHtmlTag & PropsFromBox & LoaderOwnProps
