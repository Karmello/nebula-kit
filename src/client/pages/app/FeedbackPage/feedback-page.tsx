import { FormProvider, useForm } from 'react-hook-form'
import { Controller } from 'react-hook-form'

import {
  Box,
  Button,
  NEB_LENGTH,
  Section,
  Spacer,
  Text,
  Textarea,
  useSnackbar,
} from 'lib/components'
import { useSendFeedback } from 'client/api'

export const FeedbackPage = () => {
  const { show } = useSnackbar()
  const sendFeedback = useSendFeedback()

  const form = useForm<{ message: string }>({
    defaultValues: { message: '' },
    mode: 'onChange',
  })

  const handleSubmit = form.handleSubmit(async (...args) => {
    const res = await sendFeedback.sendRequest({ message: args[0].message })

    show({
      status: res.ok ? 'success' : res.code >= 500 ? 'error' : 'warning',
      content: res.ok ? res.data.message : res.error.message,
    })

    if (res.ok) form.reset()
  })

  const { isSubmitting } = form.formState

  return (
    <Box
      paddingTop={NEB_LENGTH.px_016}
      paddingInline={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }}
      maxInlineSize="75rem"
    >
      <Section size="lg" heading="Feedback" iconName="mail">
        <Text>Help shape the future of NebulaKit. All feedback submitted here is anonymous.</Text>
        <Spacer blockSize={NEB_LENGTH.px_048} />
        <FormProvider {...form}>
          <Box tag="form" tagAttrs={{ onSubmit: handleSubmit }}>
            <Controller
              name="message"
              control={form.control}
              rules={{
                required: 'is required',
                minLength: { value: 5, message: 'is too short' },
                maxLength: { value: 2000, message: 'is too long' },
              }}
              render={({ field, fieldState }) => {
                const labelErrPart = fieldState.error?.message
                  ? ` - ${fieldState.error.message}`
                  : ''

                return (
                  <>
                    <Text
                      color="red"
                      intent={labelErrPart ? 'primary' : 'neutral'}
                    >{`Message${labelErrPart}`}</Text>
                    <Spacer blockSize={NEB_LENGTH.px_004} />
                    <Textarea
                      value={field.value}
                      onChange={field.onChange}
                      disabled={isSubmitting}
                      placeholder="Write your feedback ..."
                      rows={10}
                      resize="none"
                    />
                  </>
                )
              }}
            />
            <Spacer blockSize={NEB_LENGTH.px_016} />
            <Button
              tagAttrs={{ type: 'submit' }}
              color="blue"
              intent="primary"
              loading={isSubmitting}
            >
              Submit
            </Button>
          </Box>
        </FormProvider>
      </Section>
    </Box>
  )
}
