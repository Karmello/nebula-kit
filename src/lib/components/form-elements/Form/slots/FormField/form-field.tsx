import { cloneElement, ReactElement } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import classNames from 'classnames'
import { omit } from 'lodash-es'

import { Flex, Form, FormHintProps, FormLabelProps } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_FORM_FIELD_FLEX, FormFieldProps } from './definitions'
import { getRulesObject } from './helpers'

export const FormField = ({
  // FlexItem
  children,
  tagAttrs,
  tagRef,
  flex = DEFAULT_FORM_FIELD_FLEX,
  flexBasis,
  flexGrow,
  flexShrink,
  alignSelf,
  order,
  // own
  name,
  label,
  hint,
  options,
  // own (validation)
  required,
  minLength,
  maxLength,
  email,
}: FormFieldProps) => {
  const formContext = useFormContext()

  const formId = (formContext as any).formId
  const labelId = `${formId}-${name}-label`

  return (
    <WithSlots<'Form.Label' | 'Form.Hint'>
      childrenToVerify={children}
      componentName="Form.Field"
      slotsConfig={[{ name: 'Form.Label' }, { name: 'Form.Hint' }]}
    >
      {({ slotsByName, allNonSlots }) => {
        const formFieldComponent = allNonSlots?.[0] as ReactElement<any>
        const customFormLabelComponent = slotsByName['Form.Label']?.[0] as ReactElement<FormLabelProps>
        const customFormHintComponent = slotsByName['Form.Hint']?.[0] as ReactElement<FormHintProps>

        return (
          <Flex.Item
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('form-field'), tagAttrs?.className),
            }}
            tagRef={tagRef}
            flex={flex}
            flexBasis={flexBasis}
            flexGrow={flexGrow}
            flexShrink={flexShrink}
            alignSelf={alignSelf}
            order={order}
          >
            <Controller
              name={name}
              control={formContext.control}
              defaultValue={formFieldComponent.props.defaultValue ?? ''}
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
                      ...omit(formFieldComponent.props, ['value', 'defaultValue', 'onChange']),
                      ...field,
                      onBlur: (e: any) => {
                        const trimmed = e.target.value.trim()
                        if (trimmed !== e.target.value) field.onChange(trimmed)
                        field.onBlur()
                      },
                      disabled: formContext.formState.isSubmitting,
                      tagAttrs: {
                        ...formFieldComponent.props.tagAttrs,
                        'aria-labelledby': customFormLabelComponent || label ? labelId : undefined,
                        name,
                      },
                    })}
                    {customFormHintComponent ? (
                      customFormHintComponent
                    ) : hint ? (
                      <Form.Hint>{hint}</Form.Hint>
                    ) : null}
                  </>
                )
              }}
            />
          </Flex.Item>
        )
      }}
    </WithSlots>
  )
}

FormField.displayName = 'Form.Field'
