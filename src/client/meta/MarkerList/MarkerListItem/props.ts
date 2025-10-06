import { ComponentMeta } from 'client/definitions'
import { MarkerListItemProps } from 'lib/components'

import { HTML_TAG_PROPS_META } from '../../HtmlTag/props'
import { BOX_PROPS_META } from '../../Box/props'

const MARKER_LIST_PROPS_META: ComponentMeta<MarkerListItemProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  intent: {
    ...BOX_PROPS_META.intent,
    description: 'Semantic color intent applied to each item individually.',
  },
}

export { MARKER_LIST_PROPS_META }
