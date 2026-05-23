import { ComponentMeta } from 'client/definitions'
import { GRID_ITEM_PROPS_META } from 'client/meta/Grid/GridItem/props'
import { ToolbarMainProps } from 'lib/components'

const TOOLBAR_MAIN_PROPS_META: ComponentMeta<ToolbarMainProps>['props'] = {
  children: {
    ...GRID_ITEM_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: GRID_ITEM_PROPS_META.tagAttrs,
  tagRef: GRID_ITEM_PROPS_META.tagRef,
}

export { TOOLBAR_MAIN_PROPS_META }
