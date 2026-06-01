import { ComponentMeta } from 'client/definitions'

import { BOX_PROPS_META } from '../../../Box/meta/props'
import { FLEX_ITEM_PROPS_META } from '../../../Flex/meta/FlexItem/props'
import { type FooterSectionProps } from '../../slots/FooterSection/definitions'

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
