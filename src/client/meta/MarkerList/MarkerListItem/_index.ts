import { ComponentMeta } from 'client/definitions'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { MarkerListItemProps } from 'lib/components'

const MARKER_LIST_ITEM_META: ComponentMeta<MarkerListItemProps> = {
  overview: {
    name: 'MarkerList.Item',
    title: 'Single item inside MarkerList.',
    composedOf: ['Box'],
    rendersAs: ['li'],
  },
  props: {
    tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
    tagRef: HTML_TAG_PROPS_META.tagRef,
    children: {
      ...HTML_TAG_PROPS_META.children,
      isRequired: true,
    },
  },
}

export { MARKER_LIST_ITEM_META }
