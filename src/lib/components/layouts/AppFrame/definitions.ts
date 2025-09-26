import { HtmlTagProps } from 'lib/components'

type AppFrameOwnProps = {
  stickyHeader?: boolean
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'div'>['children']
}

export type AppFrameProps = PropsFromHtmlTag & AppFrameOwnProps
