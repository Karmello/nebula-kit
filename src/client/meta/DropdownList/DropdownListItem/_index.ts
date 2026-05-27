import { ComponentMeta } from 'client/definitions'
import { DropdownListItemProps } from 'lib/components'

import { DROPDOWN_LIST_ITEM_PROPS_META } from './props'
import { ACTION_SURFACE_TAGS } from 'lib/components/core/ActionSurface'

const DROPDOWN_LIST_ITEM_META: ComponentMeta<DropdownListItemProps> = {
  overview: {
    bundle: 'core',
    name: 'DropdownList.Item',
    title: 'Interactive list item used within a DropdownList.',
    features: ['represents a selectable option within a DropdownList'],
    composedOf: ['ActionSurface'],
    topLevelTags: ACTION_SURFACE_TAGS,
  },
  props: DROPDOWN_LIST_ITEM_PROPS_META,
}

export { DROPDOWN_LIST_ITEM_META }
