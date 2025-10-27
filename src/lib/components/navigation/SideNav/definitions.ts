import { FlexProps, HtmlTagProps } from 'lib/components'

export const SIDE_NAV_EXPAND_MODES = ['single', 'multiple'] as const
export const DEFAULT_SIDE_NAV_EXPAND_MODE: SideNavExpandMode = 'multiple'

export type SideNavExpandMode = (typeof SIDE_NAV_EXPAND_MODES)[number]

export type SideNavOwnProps = {
  expandMode?: SideNavExpandMode
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'nav'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'nav'>['children']
}

type PropsFromFlex = Pick<FlexProps, 'rowGap'>

export type SideNavProps = PropsFromHtmlTag & PropsFromFlex & SideNavOwnProps
