import { cloneElement, ReactElement } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import classNames from 'classnames'
import { omit } from 'lodash-es'

import { Flex } from 'lib/components'
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
  options,
}: FormFieldProps) => {
  const { control } = useFormContext()

  const finalChildren = children as ReactElement<any>

  return (
    <Flex.Item
      tag="label"
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
        control={control}
        defaultValue={finalChildren.props.defaultValue ?? ''}
        rules={options}
        render={({ field }) =>
          cloneElement(finalChildren, {
            ...omit(finalChildren.props, ['value', 'defaultValue', 'onChange']),
            ...field,
          })
        }
      />
    </Flex.Item>
  )
}

FormField.displayName = 'Form.Field'
