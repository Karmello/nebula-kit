import { ReactElement } from 'react'
import classNames from 'classnames'

import { WithSlots } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'
import { Flex } from 'lib/index.core'
import { FormFieldProps, FormHintProps, FormLabelProps } from 'lib/index.pro'

import { DEFAULT_FORM_FIELD_FLEX } from './definitions'
import { FormFieldController } from './form-field-controller'

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
  return (
    <WithSlots<'Form.Label' | 'Form.Hint'>
      childrenToVerify={children}
      componentName="Form.Field"
      slotsConfig={[{ name: 'Form.Label' }, { name: 'Form.Hint' }]}
    >
      {({ slotsByName, allNonSlots }) => {
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
            <FormFieldController
              formFieldProps={{ name, label, hint, options, required, minLength, maxLength, email }}
              formFieldComponent={allNonSlots?.[0] as ReactElement<any>}
              customFormLabelComponent={
                slotsByName['Form.Label']?.[0] as ReactElement<FormLabelProps>
              }
              customFormHintComponent={slotsByName['Form.Hint']?.[0] as ReactElement<FormHintProps>}
            />
          </Flex.Item>
        )
      }}
    </WithSlots>
  )
}

FormField.displayName = 'Form.Field'
