import { Form as FormBase } from './form'

import { FormField } from './FormField'

export const Form = Object.assign(FormBase, {
  Field: FormField,
})

export { type FormProps } from './definitions'
export * from './FormField'
