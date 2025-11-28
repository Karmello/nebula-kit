import { ButtonProps, FlexProps, HtmlTagProps } from 'lib/components'
import { BoxVariant } from 'lib/components/core/base/Box/definitions'

export const SIDE_NAV_EXPAND_MODES = ['single', 'multiple'] as const
export const SIDE_NAV_VARIANTS = ['solid', 'ghost'] as const satisfies BoxVariant[]
export const DEFAULT_SIDE_NAV_EXPAND_MODE: SideNavExpandMode = 'multiple'

export type SideNavExpandMode = (typeof SIDE_NAV_EXPAND_MODES)[number]
export type SideNavVariant = (typeof SIDE_NAV_VARIANTS)[number]

export type SideNavOwnProps = {
  expandMode?: SideNavExpandMode
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'nav'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'nav'>['children']
  variant?: SideNavVariant
}

type PropsFromFlex = Pick<FlexProps, 'rowGap'>

type PropsFromButton = Pick<ButtonProps<'a'>, 'color' | 'intent'>

export type SideNavProps = PropsFromHtmlTag & PropsFromFlex & PropsFromButton & SideNavOwnProps
