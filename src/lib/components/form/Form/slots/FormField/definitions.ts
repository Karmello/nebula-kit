import { FieldValues, RegisterOptions } from 'react-hook-form'

import { FlexItemProps } from 'lib/components'

export const DEFAULT_FORM_FIELD_FLEX: FormFieldProps['flex'] = 1

type FormFieldOwnProps = {
  name: string
  options?: RegisterOptions<FieldValues, string>
}

type PropsFromFlexItem = Omit<FlexItemProps<'label'>, 'tag'>

export type FormFieldProps = PropsFromFlexItem & FormFieldOwnProps
