import { Form as FormBase } from './form'
import { FormActionButton, FormActions, FormField, FormFields, FormHint,FormLabel } from './slots'

export const Form = Object.assign(FormBase, {
  Fields: FormFields,
  Field: FormField,
  Actions: FormActions,
  ActionButton: FormActionButton,
  Label: FormLabel,
  Hint: FormHint,
})

export * from './definitions'
export * from './slots'
