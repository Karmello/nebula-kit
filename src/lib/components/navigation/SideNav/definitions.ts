import { BoxProps, HtmlTagProps } from 'lib/components'
import { BoxIntent, BoxVariant } from 'lib/components/base/Box/definitions'

export const SideNavExpandMode = ['single', 'multiple'] as const
export const DEFAULT_SIDE_NAV_EXPAND_MODE: SideNavExpandMode = 'multiple'
export const DEFAULT_SIDE_NAV_VARIANT: BoxVariant = 'solid'
export const DEFAULT_SIDE_NAV_INTENT: BoxIntent = 'neutral'

export type SideNavExpandMode = (typeof SideNavExpandMode)[number]

export type SideNavOwnProps = {
  expandMode?: SideNavExpandMode
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'nav'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'nav'>['children']
}

type PropsFromBox = Pick<BoxProps<'nav'>, 'variant' | 'intent'>

export type SideNavProps = PropsFromHtmlTag & PropsFromBox & SideNavOwnProps
