import { HtmlTagProps } from 'lib/components'

export const SideNavExpandMode = ['single', 'multiple'] as const
export const DEFAULT_SIDE_NAV_EXPAND_MODE: SideNavExpandMode = 'multiple'

export type SideNavExpandMode = (typeof SideNavExpandMode)[number]

export type SideNavOwnProps = {
  expandMode?: SideNavExpandMode
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'nav'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'nav'>['children']
}

export type SideNavProps = PropsFromHtmlTag & SideNavOwnProps
