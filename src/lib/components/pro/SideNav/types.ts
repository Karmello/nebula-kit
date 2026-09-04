import { BoxProps } from 'lib/components/core/Box'
import { TShirtSize } from 'lib/types'

import { SIDE_NAV_EXPAND_MODES, SIDE_NAV_VARIANTS } from './constants'

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
