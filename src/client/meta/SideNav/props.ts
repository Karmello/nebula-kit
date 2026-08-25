import {
  DEFAULT_SIDE_NAV_EXPAND_MODE,
  DEFAULT_SIDE_NAV_GAP,
  DEFAULT_SIDE_NAV_SCALE,
  SIDE_NAV_EXPAND_MODES,
  SIDE_NAV_VARIANTS,
} from 'lib/components/pro/SideNav/constants'
import { SideNavProps } from 'lib/index.pro'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'
import { BUTTON_META } from '../Button'

export const SIDE_NAV_PROPS: Record<keyof SideNavProps, Prop> = {
  children: {
    ...BOX_META.props.children,
    options: ['SideNav.Category', 'SideNav.Item'],
    isRequired: true,
    description: 'SideNav slots.',
  },
  color: {
    ...BUTTON_META.props.color,
    description: 'Color applied to all categories and items.',
  },
  expandMode: {
    options: SIDE_NAV_EXPAND_MODES,
    defaultValue: DEFAULT_SIDE_NAV_EXPAND_MODE,
    description:
      'Controls whether one or multiple categories can remain expanded at the same time.',
  },
  gap: {
    ...BOX_META.props.gap,
    defaultValue: String(DEFAULT_SIDE_NAV_GAP),
    description: 'Defines vertical spacing between items.',
  },
  intent: {
    ...BUTTON_META.props.intent,
    description: 'Color tone applied to all categories and items.',
  },
  scale: {
    ...BUTTON_META.props.scale,
    defaultValue: DEFAULT_SIDE_NAV_SCALE,
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
  variant: {
    options: SIDE_NAV_VARIANTS,
    isResponsive: true,
    description: 'Visual style variant applied to all categories and items.',
  },
}
