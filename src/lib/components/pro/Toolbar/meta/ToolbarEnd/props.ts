import { ComponentMeta } from 'client/definitions'

import { GRID_ITEM_PROPS_META } from '../../../../core/Grid/meta/GridItem/props'
import { type ToolbarEndProps } from '../../slots/ToolbarEnd/definitions'

const TOOLBAR_END_PROPS_META: ComponentMeta<ToolbarEndProps>['props'] = {
  children: {
    ...GRID_ITEM_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: GRID_ITEM_PROPS_META.tagAttrs,
  tagRef: GRID_ITEM_PROPS_META.tagRef,
}

export { TOOLBAR_END_PROPS_META }
