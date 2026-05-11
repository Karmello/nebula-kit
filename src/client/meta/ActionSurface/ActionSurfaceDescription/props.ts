import { ComponentMeta } from 'client/definitions'

import {
  ActionSurfaceDescriptionProps,
  ACTION_SURFACE_DESCRIPTION_TYPOGRAPHY,
  DEFAULT_ACTION_SURFACE_DESCRIPTION_CLAMP_LINES,
  DEFAULT_ACTION_SURFACE_DESCRIPTION_INTENT,
  DEFAULT_ACTION_SURFACE_DESCRIPTION_TYPOGRAPHY,
} from 'lib/components/core/controls/ActionSurface/slots/ActionSurfaceDescription/definitions'

import { TEXT_PROPS_META } from '../../Text/props'

const ACTION_SURFACE_DESCRIPTION_PROPS_META: ComponentMeta<ActionSurfaceDescriptionProps>['props'] = {
  children: TEXT_PROPS_META.children,
  clampLines: {
    ...TEXT_PROPS_META.clampLines,
    defaultValue: String(DEFAULT_ACTION_SURFACE_DESCRIPTION_CLAMP_LINES),
  },
  color: TEXT_PROPS_META.color,
  intent: {
    ...TEXT_PROPS_META.intent,
    defaultValue: String(DEFAULT_ACTION_SURFACE_DESCRIPTION_INTENT),
  },
  italic: TEXT_PROPS_META.italic,
  tagAttrs: TEXT_PROPS_META.tagAttrs,
  tagRef: TEXT_PROPS_META.tagRef,
  truncate: TEXT_PROPS_META.truncate,
  typography: {
    ...TEXT_PROPS_META.typography,
    options: ACTION_SURFACE_DESCRIPTION_TYPOGRAPHY,
    defaultValue: DEFAULT_ACTION_SURFACE_DESCRIPTION_TYPOGRAPHY,
  },
}

export { ACTION_SURFACE_DESCRIPTION_PROPS_META }
