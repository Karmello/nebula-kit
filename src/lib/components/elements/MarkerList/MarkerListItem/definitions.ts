import { HtmlTagProps } from 'lib/components'

export type MarkerListItemProps = Pick<HtmlTagProps<'li'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'li'>['children']
}
