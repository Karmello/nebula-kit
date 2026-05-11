import { ComponentMeta } from 'client/definitions'

import {
  ActionSurfaceHeadingProps,
  ACTION_SURFACE_HEADING_TYPOGRAPHY,
  DEFAULT_ACTION_SURFACE_HEADING_BOLD,
  DEFAULT_ACTION_SURFACE_HEADING_TRUNCATE,
  DEFAULT_ACTION_SURFACE_HEADING_TYPOGRAPHY,
} from 'lib/components/core/controls/ActionSurface/slots/ActionSurfaceHeading/definitions'

import { TEXT_PROPS_META } from '../../Text/props'

const ACTION_SURFACE_HEADING_PROPS_META: ComponentMeta<ActionSurfaceHeadingProps>['props'] = {
  bold: {
    ...TEXT_PROPS_META.bold,
    defaultValue: String(DEFAULT_ACTION_SURFACE_HEADING_BOLD),
  },
  children: TEXT_PROPS_META.children,
  clampLines: TEXT_PROPS_META.clampLines,
  color: TEXT_PROPS_META.color,
  customSvgIcon: TEXT_PROPS_META.customSvgIcon,
  iconName: TEXT_PROPS_META.iconName,
  iconPlacement: TEXT_PROPS_META.iconPlacement,
  intent: TEXT_PROPS_META.intent,
  tagAttrs: TEXT_PROPS_META.tagAttrs,
  tagRef: TEXT_PROPS_META.tagRef,
  truncate: {
    ...TEXT_PROPS_META.truncate,
    defaultValue: String(DEFAULT_ACTION_SURFACE_HEADING_TRUNCATE),
  },
  typography: {
    ...TEXT_PROPS_META.typography,
    options: ACTION_SURFACE_HEADING_TYPOGRAPHY,
    defaultValue: DEFAULT_ACTION_SURFACE_HEADING_TYPOGRAPHY,
  },
}

export { ACTION_SURFACE_HEADING_PROPS_META }
