import { BoxProps, HtmlTagProps } from 'lib/components'

export const DEFAULT_SPACER_BLOCK_SIZE = 2

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'>
type PropsFromBox = Pick<BoxProps<'div'>, 'blockSize'>

export type SpacerProps = PropsFromHtmlTag & PropsFromBox
