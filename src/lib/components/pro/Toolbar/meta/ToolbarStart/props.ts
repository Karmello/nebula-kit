import { ComponentMeta } from 'client/definitions'

import { GRID_ITEM_PROPS_META } from '../../../../core/Grid/meta/GridItem/props'
import { type ToolbarStartProps } from '../../../Toolbar/slots/ToolbarStart/definitions'

const TOOLBAR_START_PROPS_META: ComponentMeta<ToolbarStartProps>['props'] = {
  children: {
    ...GRID_ITEM_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: GRID_ITEM_PROPS_META.tagAttrs,
  tagRef: GRID_ITEM_PROPS_META.tagRef,
}

export { TOOLBAR_START_PROPS_META }
