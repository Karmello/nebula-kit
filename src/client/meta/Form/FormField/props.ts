import { ComponentMeta } from 'client/definitions'
import { FLEX_ITEM_PROPS_META } from 'client/meta/Flex/FlexItem/props'
import { FormFieldProps } from 'lib/components'
import { DEFAULT_FORM_FIELD_FLEX } from 'lib/components/form/Form/slots'

const FORM_FIELD_PROPS_META: ComponentMeta<FormFieldProps>['props'] = {
  alignSelf: FLEX_ITEM_PROPS_META.alignSelf,
  children: {
    ...FLEX_ITEM_PROPS_META.children,
    description: 'Form field component like Input or Select.',
  },
  flex: {
    ...FLEX_ITEM_PROPS_META.flex,
    defaultValue: String(DEFAULT_FORM_FIELD_FLEX),
  },
  flexBasis: FLEX_ITEM_PROPS_META.flexBasis,
  flexGrow: FLEX_ITEM_PROPS_META.flexGrow,
  flexShrink: FLEX_ITEM_PROPS_META.flexShrink,
  name: {
    options: ['string'],
    isRequired: true,
    description: 'Field identifier mapped directly to RHF name property.',
  },
  options: {
    options: ['RegisterOptions (RHF)'],
    description: 'Validation and configuration rules mapped to RHF Controller.',
  },
  order: FLEX_ITEM_PROPS_META.order,
  tagAttrs: FLEX_ITEM_PROPS_META.tagAttrs,
  tagRef: FLEX_ITEM_PROPS_META.tagRef,
}

export { FORM_FIELD_PROPS_META }
