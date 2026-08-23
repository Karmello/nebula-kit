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

export type SideNavProps = {
  // own
  expandMode?: SideNavExpandMode
  scale?: TShirtSize
  variant?: SideNavVariant
  // Box
  tagAttrs?: BoxProps<'nav'>['tagAttrs']
  tagRef?: BoxProps<'nav'>['tagRef']
  gap?: BoxProps<'nav'>['gap']
  color?: BoxProps<'nav'>['color']
  intent?: BoxProps<'nav'>['intent']
  children: BoxProps<'nav'>['children']
}
