import { useId } from 'react'
import classNames from 'classnames'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'

import { WithSlots } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'
import { Box } from 'lib/index.core'

import {
  DEFAULT_FORM_ALIGN_ITEMS,
  DEFAULT_FORM_COLUMN_GAP,
  DEFAULT_FORM_FLEX_DIRECTION,
  DEFAULT_FORM_ROW_GAP,
  FormProps,
} from './definitions'
import { waitForTime } from './helpers'

export const Form = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
>({
  // RHF
  useFormProps,
  onValidSubmission,
  onInvalidSubmission,
  // Flex
  children,
  tagAttrs,
  tagRef,
  flexDirection = DEFAULT_FORM_FLEX_DIRECTION,
  flexWrap,
  justifyContent,
  alignItems = DEFAULT_FORM_ALIGN_ITEMS,
  gap,
  rowGap = DEFAULT_FORM_ROW_GAP,
  columnGap = DEFAULT_FORM_COLUMN_GAP,
  // own
  minLoadingTime,
  onResponse,
  resetOnSuccess,
}: FormProps<TFieldValues, TContext, TTransformedValues>) => {
  const form = useForm<TFieldValues, TContext, TTransformedValues>(useFormProps)
  const handleSubmit = form.handleSubmit(async (...args) => {
    const start = Date.now()
    if (!onValidSubmission) {
      await waitForTime(start, minLoadingTime)
      return
    }
    try {
      const res = (await onValidSubmission(...args)) as Response
      await waitForTime(start, minLoadingTime)
      if (resetOnSuccess && res.ok) form.reset()
      onResponse?.(res, form)
    } catch (err) {
      await waitForTime(start, minLoadingTime)
      onResponse?.(err, form)
    }
  }, onInvalidSubmission)

  const formId = useId()

  const finalChildren = typeof children === 'function' ? children(form) : children

  return (
    <WithSlots<'Form.Fields' | 'Form.Actions'>
      childrenToVerify={finalChildren}
      componentName="Form"
      slotsConfig={[{ name: 'Form.Fields', required: true }, { name: 'Form.Actions' }]}
    >
      {({ slotsByName }) => {
        return (
          <FormProvider {...(form as any)} formId={formId}>
            <Box
              display="flex"
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
              <Box flex="1">{slotsByName['Form.Fields']}</Box>
              <Box>{slotsByName['Form.Actions']}</Box>
            </Box>
          </FormProvider>
        )
      }}
    </WithSlots>
  )
}

Form.displayName = 'Form'
