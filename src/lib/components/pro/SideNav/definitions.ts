import { ButtonProps, FlexProps } from 'lib/components'
import { BoxVariant, RespValue } from 'lib/types'

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

type PropsFromFlex = Pick<FlexProps<'nav'>, 'tagAttrs' | 'tagRef' | 'gap'>

type PropsFromButton = Pick<ButtonProps<'a'>, 'color' | 'intent' | 'size'>

export type SideNavProps = PropsFromFlex &
  PropsFromButton &
  SideNavOwnProps & {
    children: FlexProps<'nav'>['children']
    variant?: RespValue<SideNavVariant>
  }
