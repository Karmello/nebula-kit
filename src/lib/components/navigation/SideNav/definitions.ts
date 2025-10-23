import { FlexProps, HtmlTagProps } from 'lib/components'

export const SideNavExpandMode = ['single', 'multiple'] as const
export const DEFAULT_SIDE_NAV_EXPAND_MODE: SideNavExpandMode = 'multiple'
export const DEFAULT_SIDE_NAV_ROW_GAP: FlexProps['rowGap'] = 1

export type SideNavExpandMode = (typeof SideNavExpandMode)[number]

export type SideNavOwnProps = {
  expandMode?: SideNavExpandMode
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'nav'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'nav'>['children']
}

type PropsFromFlex = Pick<FlexProps, 'rowGap'>

export type SideNavProps = PropsFromHtmlTag & PropsFromFlex & SideNavOwnProps
