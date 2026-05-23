import { ComponentMeta } from 'client/definitions'
import { FormProps } from 'lib/components'

import {
  DEFAULT_FORM_ALIGN_ITEMS,
  DEFAULT_FORM_FLEX_DIRECTION,
  DEFAULT_FORM_COLUMN_GAP,
  DEFAULT_FORM_ROW_GAP,
} from 'lib/components/pro/Form'

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
  minLoadingTime: {
    options: ['number'],
    description:
      'Sets the minimum time (in milliseconds) that the form stays in a loading state. Useful to avoid flickering when requests resolve instantly. Around 500ms tends to provide the smoothest UX.',
  },
  onInvalidSubmission: {
    options: ['(errors, event) => void'],
    description: 'Callback fired when validation fails, receiving the field errors.',
  },
  onResponse: {
    options: ['(response, formContext) => void'],
    description:
      'Called once the submission cycle finishes. The "response" argument contains whatever "onValidSubmission" returned or threw and is typed as unknown so consumers may cast it as needed.',
  },
  onValidSubmission: {
    options: ['(values, event) => void'],
    description:
      'Callback fired when form data passes validation, receiving the validated values. Return a Promise to run asynchronous actions like API calls. The form will wait for the Promise to resolve or reject before continuing and then call the "onResponse" callback.',
  },
  resetOnSuccess: {
    options: ['boolean'],
    defaultValue: 'false',
    description: 'Resets the form back to its initial default values after a successful submission.',
  },
  rowGap: {
    ...FLEX_PROPS_META.rowGap,
    defaultValue: String(DEFAULT_FORM_ROW_GAP),
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  useFormProps: {
    options: ['UseFormProps (RHF)'],
    description: 'Passes configuration options directly to RHF useForm.',
  },
}

export { FORM_PROPS_META }
