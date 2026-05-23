import { BoxProps, HtmlTagProps } from 'lib/components'

type PropsFromBox = Pick<BoxProps<'li'>, 'tagAttrs' | 'tagRef' | 'color' | 'intent'> & {
  children: HtmlTagProps<'li'>['children']
}

export type MarkerListItemProps = PropsFromBox & PropsFromBox
