import { FieldValues, RegisterOptions } from 'react-hook-form'

import { FlexItemProps } from 'lib/components'

export const DEFAULT_FORM_FIELD_FLEX: FormFieldProps['flex'] = '1'

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FormFieldOwnProps = {
  name: string
  label?: string
  hint?: string
  options?: RegisterOptions<FieldValues, string>
  required?: boolean | string
  minLength?: number | { value: number; message: string }
  maxLength?: number | { value: number; message: string }
  email?: boolean | string
}

type PropsFromFlexItem = Omit<FlexItemProps<'div'>, 'tag'>

export type FormFieldProps = PropsFromFlexItem & FormFieldOwnProps
