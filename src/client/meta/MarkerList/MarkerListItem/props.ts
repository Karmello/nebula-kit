import { ComponentMeta } from 'client/definitions'
import { MarkerListItemProps } from 'lib/components'

import { HTML_TAG_PROPS_META } from '../../HtmlTag/props'
import { BOX_PROPS_META } from '../../Box/props'

const MARKER_LIST_PROPS_META: ComponentMeta<MarkerListItemProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  color: {
    ...BOX_PROPS_META.color,
    description: 'Color applied to each item individually.',
  },
  intent: {
    ...BOX_PROPS_META.intent,
    description: 'Tone level applied to each item individually.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { MARKER_LIST_PROPS_META }
