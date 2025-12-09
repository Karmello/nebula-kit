import { ComponentMeta } from 'client/definitions'
import { FLEX_PROPS_META } from 'client/meta/Flex/props'
import { FormFieldsProps } from 'lib/components'

import {
  DEFAULT_FORM_FIELDS_ALIGN_ITEMS,
  DEFAULT_FORM_FIELDS_FLEX_DIRECTION,
  DEFAULT_FORM_FIELDS_ROW_GAP,
  DEFAULT_FORM_FIELDS_COLUMN_GAP,
} from 'lib/components/pro/form-elements/Form'

const FORM_FIELDS_PROPS_META: ComponentMeta<FormFieldsProps>['props'] = {
  alignItems: {
    ...FLEX_PROPS_META.alignItems,
    defaultValue: String(DEFAULT_FORM_FIELDS_ALIGN_ITEMS),
  },
  children: {
    ...FLEX_PROPS_META.children,
    options: ['Form.Field'],
    description: 'Any number of Form.Field slots.',
  },
  columnGap: {
    ...FLEX_PROPS_META.columnGap,
    defaultValue: String(DEFAULT_FORM_FIELDS_COLUMN_GAP),
  },
  flexDirection: {
    ...FLEX_PROPS_META.flexDirection,
    defaultValue: String(DEFAULT_FORM_FIELDS_FLEX_DIRECTION),
  },
  flexWrap: FLEX_PROPS_META.flexWrap,
  gap: FLEX_PROPS_META.gap,
  justifyContent: FLEX_PROPS_META.justifyContent,
  rowGap: {
    ...FLEX_PROPS_META.rowGap,
    defaultValue: String(DEFAULT_FORM_FIELDS_ROW_GAP),
  },
  tagAttrs: FLEX_PROPS_META.tagAttrs,
  tagRef: FLEX_PROPS_META.tagRef,
}

export { FORM_FIELDS_PROPS_META }
