import { Form as FormBase } from './form'

import { FormFields, FormField, FormActions, FormActionButton, FormLabel } from './slots'

export const Form = Object.assign(FormBase, {
  Fields: FormFields,
  Field: FormField,
  Actions: FormActions,
  ActionButton: FormActionButton,
  Label: FormLabel,
})

export type { FormProps } from './definitions'

export type {
  FormFieldsProps,
  FormFieldProps,
  FormActionsProps,
  FormActionButtonProps,
  FormLabelProps,
} from './slots'
