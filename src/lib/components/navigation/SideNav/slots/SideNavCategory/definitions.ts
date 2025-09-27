import { ButtonProps, HtmlTagProps } from 'lib/components'

type SideNavCategoryOwnProps = {
  label: string
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'ul'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'ul'>['children']
}

type PropsFromButton = Pick<ButtonProps<'button'>, 'variant' | 'intent'>

export type SideNavCategoryProps = PropsFromHtmlTag & PropsFromButton & SideNavCategoryOwnProps
