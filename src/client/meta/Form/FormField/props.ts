import { ComponentMeta } from 'client/definitions'
import { FLEX_ITEM_PROPS_META } from 'client/meta/Flex/FlexItem/props'
import { FormFieldProps } from 'lib/components'
import { DEFAULT_FORM_FIELD_FLEX } from 'lib/components/pro/Form'

const FORM_FIELD_PROPS_META: ComponentMeta<FormFieldProps>['props'] = {
  alignSelf: FLEX_ITEM_PROPS_META.alignSelf,
  children: {
    ...FLEX_ITEM_PROPS_META.children,
    description: 'Form field component like Input or Select.',
  },
  email: {
    options: ['boolean', 'string'],
    description:
      'Enables email format validation. Pass true to use the built-in validation message or a string to provide a custom one.',
  },
  flex: {
    ...FLEX_ITEM_PROPS_META.flex,
    defaultValue: String(DEFAULT_FORM_FIELD_FLEX),
    description:
      'Shorthand for flex-grow, flex-shrink and flex-basis. Defaults to 1 to allow fields to expand and fill available space.',
  },
  flexBasis: FLEX_ITEM_PROPS_META.flexBasis,
  flexGrow: FLEX_ITEM_PROPS_META.flexGrow,
  flexShrink: FLEX_ITEM_PROPS_META.flexShrink,
  hint: {
    options: ['string'],
    description: 'Text used to render hint when no custom Form.Hint slot is defined. Acts as a shorthand for simple hints.',
  },
  label: {
    options: ['string'],
    description: 'Text used to render label when no custom Form.Label slot is defined. Acts as a shorthand for simple labels.',
  },
  maxLength: {
    options: ['number', '{ value: number; message: string }'],
    description:
      'Sets the maximum allowed length for the field value. Pass a number to use the built-in validation message or an object with value and message for a custom one.',
  },
  minLength: {
    options: ['number', '{ value: number; message: string }'],
    description:
      'Sets the minimum allowed length for the field value. Pass a number to use the built-in validation message or an object with value and message for a custom one.',
  },
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
  required: {
    options: ['boolean', 'string'],
    description:
      'Marks the field as required. Pass true to use the built-in validation message or a string to provide a custom one.',
  },
  tagAttrs: FLEX_ITEM_PROPS_META.tagAttrs,
  tagRef: FLEX_ITEM_PROPS_META.tagRef,
}

export { FORM_FIELD_PROPS_META }
