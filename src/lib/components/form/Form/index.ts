import { Form as FormBase } from './form'

import { FormFields, FormField, FormActions, FormSubmitButton, FormResetButton } from './slots'

export const Form = Object.assign(FormBase, {
  Fields: FormFields,
  Field: FormField,
  Actions: FormActions,
  SubmitButton: FormSubmitButton,
  ResetButton: FormResetButton,
})

export type { FormProps } from './definitions'

export type {
  FormFieldsProps,
  FormFieldProps,
  FormActionsProps,
  FormSubmitButtonProps,
  FormResetButtonProps,
} from './slots'
