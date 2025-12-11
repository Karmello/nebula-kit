import { useSendFeedback, UseSendFeedbackRes } from 'client/api'
import { Box, Form, Section, Spacer, Text, Textarea, useSnackbar } from 'lib/components'

export const FeedbackPage = () => {
  const { show } = useSnackbar()
  const sendFeedback = useSendFeedback()

  return (
    <Box paddingTop={15} paddingInline={{ base: 20, lg: 50 }} maxInlineSize="75rem">
      <Section heading="Feedback" intent="neutral" iconName="mail">
        <Text>
          Your input helps shape where we go next. Let us know what's on your mind. Your feedback is
          completely anonymous.
        </Text>
        <Spacer blockSize={50} />
        <Form<{ message: string }>
          useFormProps={{ defaultValues: { message: '' } }}
          onValidSubmission={async ({ message }) => {
            return await sendFeedback.sendRequest({ message })
          }}
          onResponse={(res: UseSendFeedbackRes) => {
            show({
              status: res.ok ? 'success' : res.code >= 500 ? 'error' : 'warning',
              content: res.ok ? res.data.message : res.error.message,
            })
          }}
          resetOnSuccess
        >
          <Form.Fields>
            <Form.Field name="message" label="Message" required minLength={5} maxLength={2000}>
              <Textarea tagAttrs={{ placeholder: 'Write your feedback ...' }} rows={10} resize="none" />
            </Form.Field>
          </Form.Fields>
          <Form.Actions>
            <Form.ActionButton type="submit">Send message</Form.ActionButton>
          </Form.Actions>
        </Form>
      </Section>
    </Box>
  )
}
