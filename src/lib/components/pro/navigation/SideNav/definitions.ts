import { ButtonProps, FlexProps, HtmlTagProps } from 'lib/components'
import { BoxVariant } from 'lib/components/core/base/Box'

export const SIDE_NAV_EXPAND_MODES = ['single', 'multiple'] as const
export const SIDE_NAV_VARIANTS = ['solid', 'ghost'] as const satisfies BoxVariant[]

export const DEFAULT_SIDE_NAV_EXPAND_MODE: SideNavProps['expandMode'] = 'multiple'
export const DEFAULT_SIDE_NAV_SIZE: SideNavProps['size'] = 'sm'
export const DEFAULT_SIDE_NAV_GAP: SideNavProps['gap'] = '3xs'

export type SideNavExpandMode = (typeof SIDE_NAV_EXPAND_MODES)[number]
export type SideNavVariant = (typeof SIDE_NAV_VARIANTS)[number]

export type SideNavOwnProps = {
  expandMode?: SideNavExpandMode
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'nav'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'nav'>['children']
  variant?: SideNavVariant
}

type PropsFromFlex = Pick<FlexProps, 'gap'>

type PropsFromButton = Pick<ButtonProps<'a'>, 'color' | 'intent' | 'size'>

export type SideNavProps = PropsFromHtmlTag & PropsFromFlex & PropsFromButton & SideNavOwnProps
