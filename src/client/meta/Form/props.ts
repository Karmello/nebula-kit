import { ComponentMeta } from 'client/definitions'
import { FormProps } from 'lib/components'

import {
  DEFAULT_FORM_ALIGN_ITEMS,
  DEFAULT_FORM_FLEX_DIRECTION,
  DEFAULT_FORM_GAP,
} from 'lib/components/form/Form/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { FLEX_PROPS_META } from '../Flex/props'

const FORM_PROPS_META: ComponentMeta<FormProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['Form.Field'],
    isRequired: true,
    description: 'Any number of Form.Field slots.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  flexDirection: {
    ...FLEX_PROPS_META.flexDirection,
    defaultValue: String(DEFAULT_FORM_FLEX_DIRECTION),
  },
  flexWrap: FLEX_PROPS_META.flexWrap,
  justifyContent: FLEX_PROPS_META.justifyContent,
  alignItems: {
    ...FLEX_PROPS_META.alignItems,
    defaultValue: String(DEFAULT_FORM_ALIGN_ITEMS),
  },
  gap: {
    ...FLEX_PROPS_META.gap,
    defaultValue: String(DEFAULT_FORM_GAP),
  },
}

export { FORM_PROPS_META }
