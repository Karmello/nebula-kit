import { cloneElement, ReactElement } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { omit } from 'lodash-es'

import { Form, FormFieldProps, FormLabelProps, FormHintProps } from 'lib/components'

import { getRulesObject } from './helpers'

const CHECKABLE_COMPONENTS = ['Checkbox', 'Switch']

type FormFieldControllerProps = {
  formFieldProps: Pick<
    FormFieldProps,
    'name' | 'label' | 'hint' | 'options' | 'required' | 'minLength' | 'maxLength' | 'email'
  >
  formFieldComponent: ReactElement<any>
  customFormLabelComponent?: ReactElement<FormLabelProps>
  customFormHintComponent?: ReactElement<FormHintProps>
}

export const FormFieldController = ({
  formFieldProps,
  formFieldComponent,
  customFormLabelComponent,
  customFormHintComponent,
}: FormFieldControllerProps) => {
  const formContext = useFormContext()

  const { name, label, hint, options, required, minLength, maxLength, email } = formFieldProps

  const formId = (formContext as any).formId
  const labelId = `${formId}-${name}-label`

  const isCheckable = CHECKABLE_COMPONENTS.includes((formFieldComponent.type as any).displayName)

  return (
    <Controller
      name={name}
      control={formContext.control}
      defaultValue={
        isCheckable
          ? (formFieldComponent.props['defaultChecked'] ?? false)
          : (formFieldComponent.props['defaultValue'] ?? '')
      }
      rules={getRulesObject({ options, required, minLength, maxLength, email })}
      render={({ field, fieldState }) => {
        const labelErrPart = fieldState.error?.message ? ` - ${fieldState.error.message}` : ''

        return (
          <>
            {customFormLabelComponent ? (
              cloneElement<FormLabelProps>(customFormLabelComponent, {
                tagAttrs: {
                  ...customFormLabelComponent.props.tagAttrs,
                  id: labelId,
                },
              })
            ) : label ? (
              <Form.Label
                tagAttrs={{ id: labelId }}
                color={fieldState.error ? 'red' : undefined}
                intent={fieldState.error ? 'primary' : undefined}
              >
                {label + labelErrPart}
              </Form.Label>
            ) : null}
            {cloneElement(formFieldComponent, {
              ...omit(formFieldComponent.props, [
                isCheckable ? 'checked' : 'value',
                isCheckable ? 'defaultChecked' : 'defaultValue',
                'onChange',
              ]),
              value: !isCheckable ? field.value : undefined,
              checked: isCheckable ? field.value : undefined,
              onChange: field.onChange,
              onBlur: (e: any) => {
                const trimmed = e.target.value.trim()
                if (trimmed !== e.target.value) field.onChange(trimmed)
                field.onBlur()
              },
              disabled: formContext.formState.isSubmitting,
              tagAttrs: {
                ...formFieldComponent.props.tagAttrs,
                minLength: minLength !== undefined ? minLength : undefined,
                maxLength: maxLength !== undefined ? maxLength : undefined,
                'aria-labelledby': customFormLabelComponent || label ? labelId : undefined,
                name,
              },
            })}
            {customFormHintComponent ? customFormHintComponent : hint ? <Form.Hint>{hint}</Form.Hint> : null}
          </>
        )
      }}
    />
  )
}
