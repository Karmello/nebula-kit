import { BoxProps, HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'tbody'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'tbody'>['children']
}

type PropsFromBox = Pick<BoxProps<'tbody'>, 'color' | 'intent' | 'paddingBlock' | 'paddingInline'>

export type TableBodyProps = PropsFromHtmlTag & PropsFromBox
