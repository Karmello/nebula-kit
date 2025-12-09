import { Form as FormBase } from './form'

import { FormFields, FormField, FormActions, FormActionButton, FormLabel, FormHint } from './slots'

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
