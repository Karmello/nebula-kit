import { ComponentMeta } from 'client/definitions'
import { FormProps } from 'lib/components'

import {
  DEFAULT_FORM_ALIGN_ITEMS,
  DEFAULT_FORM_FLEX_DIRECTION,
  DEFAULT_FORM_COLUMN_GAP,
  DEFAULT_FORM_ROW_GAP,
} from 'lib/components/form/Form/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { FLEX_PROPS_META } from '../Flex/props'

const FORM_PROPS_META: ComponentMeta<FormProps>['props'] = {
  alignItems: {
    ...FLEX_PROPS_META.alignItems,
    defaultValue: String(DEFAULT_FORM_ALIGN_ITEMS),
  },
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['Form.Fields', 'Form.Actions'],
    isRequired: true,
    description: 'Available slots.',
  },
  columnGap: {
    ...FLEX_PROPS_META.columnGap,
    defaultValue: String(DEFAULT_FORM_COLUMN_GAP),
  },
  flexDirection: {
    ...FLEX_PROPS_META.flexDirection,
    defaultValue: String(DEFAULT_FORM_FLEX_DIRECTION),
  },
  flexWrap: FLEX_PROPS_META.flexWrap,
  gap: FLEX_PROPS_META.gap,
  justifyContent: FLEX_PROPS_META.justifyContent,
  onInvalidSubmission: {
    options: ['SubmitErrorHandler (RHF)'],
    description: 'Callback fired when validation fails, receiving the field errors.',
  },
  onValidSubmission: {
    options: ['SubmitHandler (RHF)'],
    isRequired: true,
    description: 'Callback fired when form data passes validation, receiving the validated values.',
  },
  rowGap: {
    ...FLEX_PROPS_META.rowGap,
    defaultValue: String(DEFAULT_FORM_ROW_GAP),
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  useFormProps: {
    options: ['UseFormProps (RHF)'],
    description: "Passes configuration options directly to React Hook Form's useForm.",
  },
}

export { FORM_PROPS_META }
