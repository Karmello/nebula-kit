import { ComponentMeta } from 'client/definitions'
import { FLEX_ITEM_PROPS_META } from 'client/meta/Flex/FlexItem/props'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { FooterSectionProps } from 'lib/components'

const FOOTER_SECTION_PROPS_META: ComponentMeta<FooterSectionProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  tagRef: HTML_TAG_PROPS_META.tagRef,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  flex: FLEX_ITEM_PROPS_META.flex,
  alignSelf: FLEX_ITEM_PROPS_META.alignSelf,
}

export { FOOTER_SECTION_PROPS_META }
