import { ComponentMeta } from 'client/definitions'

import { GRID_ITEM_PROPS_META } from '../../../../core/Grid/meta/GridItem/props'
import { type ToolbarMainProps } from '../../../Toolbar/slots/ToolbarMain/definitions'

const TOOLBAR_MAIN_PROPS_META: ComponentMeta<ToolbarMainProps>['props'] = {
  children: {
    ...GRID_ITEM_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: GRID_ITEM_PROPS_META.tagAttrs,
  tagRef: GRID_ITEM_PROPS_META.tagRef,
}

export { TOOLBAR_MAIN_PROPS_META }
