import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import classNames from 'classnames'

import { Flex } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import {
  DEFAULT_FORM_ALIGN_ITEMS,
  DEFAULT_FORM_FLEX_DIRECTION,
  DEFAULT_FORM_GAP,
  FormProps,
} from './definitions'

export const Form = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
>({
  // RHF
  useFormProps,
  onValidSubmission,
  onInvalidSubmission,
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // Flex
  flexDirection = DEFAULT_FORM_FLEX_DIRECTION,
  flexWrap,
  justifyContent,
  alignItems = DEFAULT_FORM_ALIGN_ITEMS,
  gap = DEFAULT_FORM_GAP,
  rowGap,
  columnGap,
}: FormProps<TFieldValues, TContext, TTransformedValues>) => {
  const form = useForm<TFieldValues, TContext, TTransformedValues>(useFormProps)
  const handleSubmit = form.handleSubmit(onValidSubmission, onInvalidSubmission)

  return (
    <WithSlots<'Form.Fields' | 'Form.Actions'>
      childrenToVerify={children}
      componentName="Form"
      slotsConfig={[{ name: 'Form.Fields', required: true }, { name: 'Form.Actions' }]}
    >
      {({ slotsByName }) => {
        return (
          <FormProvider {...form}>
            <Flex
              tag="form"
              tagAttrs={{
                ...tagAttrs,
                className: classNames(withPrefix('form'), tagAttrs?.className),
                onSubmit: handleSubmit,
              }}
              tagRef={tagRef}
              flexDirection={flexDirection}
              flexWrap={flexWrap}
              justifyContent={justifyContent}
              alignItems={alignItems}
              gap={gap}
              rowGap={rowGap}
              columnGap={columnGap}
            >
              <Flex.Item flex={1}>{slotsByName['Form.Fields']}</Flex.Item>
              <Flex.Item>{slotsByName['Form.Actions']}</Flex.Item>
            </Flex>
          </FormProvider>
        )
      }}
    </WithSlots>
  )
}

Form.displayName = 'Form'
