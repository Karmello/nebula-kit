import { BoxProps, HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'li'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'li'>['children']
}

type PropsFromBox = Pick<BoxProps<'li'>, 'color' | 'intent'>

export type MarkerListItemProps = PropsFromHtmlTag & PropsFromBox
