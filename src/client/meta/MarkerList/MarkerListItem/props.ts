import { ComponentMeta } from 'client/definitions'
import { MarkerListItemProps } from 'lib/components'

import { BOX_PROPS_META } from '../../Box/props'

const MARKER_LIST_PROPS_META: ComponentMeta<MarkerListItemProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
  color: {
    ...BOX_PROPS_META.color,
    description: 'Color applied to each item individually.',
  },
  intent: {
    ...BOX_PROPS_META.intent,
    description: 'Color tone applied to each item individually.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
}

export { MARKER_LIST_PROPS_META }
