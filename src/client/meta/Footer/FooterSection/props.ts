import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { FLEX_ITEM_PROPS_META } from 'client/meta/Flex/FlexItem/props'
import { FooterSectionProps } from 'lib/components'

const FOOTER_SECTION_PROPS_META: ComponentMeta<FooterSectionProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
  tagRef: FLEX_ITEM_PROPS_META.tagRef,
  tagAttrs: FLEX_ITEM_PROPS_META.tagAttrs,
  flex: FLEX_ITEM_PROPS_META.flex,
  alignSelf: FLEX_ITEM_PROPS_META.alignSelf,
}

export { FOOTER_SECTION_PROPS_META }
