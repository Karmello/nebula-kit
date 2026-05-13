import { ButtonProps, HtmlTagProps } from 'lib/components'

import { SideNavVariant } from '../../definitions'

export const DEFAULT_SIDE_NAV_CATEGORY_VARIANT: SideNavCategoryProps['variant'] = 'ghost'
export const DEFAULT_SIDE_NAV_CATEGORY_INTENT: SideNavCategoryProps['intent'] = 'neutral'
export const DEFAULT_SIDE_NAV_CATEGORY_EXPANDED: SideNavCategoryProps['expanded'] = false

type SideNavCategoryOwnProps = {
  label: string
  expanded?: boolean
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'ul'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'ul'>['children']
  variant?: SideNavVariant
}

type PropsFromButton = Pick<ButtonProps<'button'>, 'color' | 'intent' | 'align' | 'bold'>

export type SideNavCategoryProps = PropsFromHtmlTag & PropsFromButton & SideNavCategoryOwnProps
