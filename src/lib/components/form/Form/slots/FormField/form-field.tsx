import { cloneElement, ReactElement } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import classNames from 'classnames'
import { omit } from 'lodash-es'

import { Flex, Form, FormLabelProps } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_FORM_FIELD_FLEX, FormFieldProps } from './definitions'

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
  options,
}: FormFieldProps) => {
  const formContext = useFormContext()

  const formId = (formContext as any).formId
  const labelId = `${formId}-${name}-label`

  return (
    <WithSlots<'Form.Label'>
      childrenToVerify={children}
      componentName="Form.Field"
      slotsConfig={[{ name: 'Form.Label' }]}
    >
      {({ slotsByName, allNonSlots }) => {
        const formFieldComponent = allNonSlots?.[0] as ReactElement<any>
        const customFormLabelComponent = slotsByName['Form.Label']?.[0] as ReactElement<FormLabelProps>

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
            {customFormLabelComponent ? (
              cloneElement<FormLabelProps>(customFormLabelComponent, {
                tagAttrs: {
                  ...customFormLabelComponent.props.tagAttrs,
                  id: labelId,
                },
              })
            ) : label ? (
              <Form.Label tagAttrs={{ id: labelId }}>{label}</Form.Label>
            ) : null}
            <Controller
              name={name}
              control={formContext.control}
              defaultValue={formFieldComponent.props.defaultValue ?? ''}
              rules={options}
              render={({ field }) =>
                cloneElement(formFieldComponent, {
                  ...omit(formFieldComponent.props, ['value', 'defaultValue', 'onChange']),
                  ...field,
                  tagAttrs: {
                    ...formFieldComponent.props.tagAttrs,
                    'aria-labelledby': customFormLabelComponent || label ? labelId : undefined,
                    name,
                  },
                })
              }
            />
          </Flex.Item>
        )
      }}
    </WithSlots>
  )
}

FormField.displayName = 'Form.Field'
