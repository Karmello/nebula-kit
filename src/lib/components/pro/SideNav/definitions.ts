import { BoxVariant } from 'lib/components/core/Box'
import { BoxProps } from 'lib/index.core'
import { TShirtSize } from 'lib/types'

export const SIDE_NAV_EXPAND_MODES = ['single', 'multiple'] as const
export const SIDE_NAV_VARIANTS = ['solid', 'ghost'] as const satisfies BoxVariant[]

export const DEFAULT_SIDE_NAV_EXPAND_MODE: SideNavProps['expandMode'] = 'multiple'
export const DEFAULT_SIDE_NAV_SCALE: SideNavProps['scale'] = 'sm'
export const DEFAULT_SIDE_NAV_GAP: SideNavProps['gap'] = '2px'

export type SideNavExpandMode = (typeof SIDE_NAV_EXPAND_MODES)[number]
export type SideNavVariant = (typeof SIDE_NAV_VARIANTS)[number]

export type SideNavOwnProps = {
  expandMode?: SideNavExpandMode
  scale?: TShirtSize
}

type PropsFromBox = Pick<BoxProps<'nav'>, 'tagAttrs' | 'tagRef' | 'gap' | 'color' | 'intent'>

export type SideNavProps = PropsFromBox &
  SideNavOwnProps & {
    children: BoxProps<'nav'>['children']
    variant?: SideNavVariant
  }
