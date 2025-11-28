import { ButtonProps, HtmlTagProps } from 'lib/components'

import { SideNavVariant } from '../../definitions'

export const DEFAULT_SIDE_NAV_CATEGORY_VARIANT: SideNavCategoryProps['variant'] = 'ghost'
export const DEFAULT_SIDE_NAV_CATEGORY_INTENT: SideNavCategoryProps['intent'] = 'neutral'

type SideNavCategoryOwnProps = {
  label: string
  initiallyExpanded?: boolean
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'ul'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'ul'>['children']
  variant?: SideNavVariant
}

type PropsFromButton = Pick<ButtonProps<'button'>, 'color' | 'intent' | 'justifyContent'>

export type SideNavCategoryProps = PropsFromHtmlTag & PropsFromButton & SideNavCategoryOwnProps
