import { HtmlTagProps } from 'lib/components'

type BreadcrumbOwnProps = {
  items: string[]
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'>

export type BreadcrumbProps = PropsFromHtmlTag & BreadcrumbOwnProps
