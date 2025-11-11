import { FieldValues, RegisterOptions, ValidationRule } from 'react-hook-form'

import { FlexItemProps } from 'lib/components'

export const DEFAULT_FORM_FIELD_FLEX: FormFieldProps['flex'] = 1

type FormFieldOwnProps = {
  name: string
  label?: string
  hint?: string
  options?: RegisterOptions<FieldValues, string>
  required?: string | ValidationRule<boolean>
}

type PropsFromFlexItem = Omit<FlexItemProps<'div'>, 'tag'>

export type FormFieldProps = PropsFromFlexItem & FormFieldOwnProps
