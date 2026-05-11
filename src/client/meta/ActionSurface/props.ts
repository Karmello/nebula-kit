import { ComponentMeta } from 'client/definitions'

import { ActionSurfaceProps } from 'lib/components'
import { BOX_PROPS_META } from '../Box/props'
import { ACTION_SURFACE_TAGS } from 'lib/components/core/controls/ActionSurface'

const ACTION_SURFACE_PROPS_META: ComponentMeta<ActionSurfaceProps>['props'] = {
  tag: {
    ...BOX_PROPS_META.tag,
    options: ACTION_SURFACE_TAGS,
    defaultValue: 'button',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  title: {
    options: ['string'],
  },
}

export { ACTION_SURFACE_PROPS_META }
