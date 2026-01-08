import { HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps['children']
}

type TabsPanelOwnProps = {
  value: string | number
}

export type TabsPanelProps = PropsFromHtmlTag & TabsPanelOwnProps
