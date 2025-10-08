import { HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'tbody'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'tbody'>['children']
}

export type TableBodyProps = PropsFromHtmlTag
