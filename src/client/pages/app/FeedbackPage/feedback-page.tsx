import { Box, Form, NEB_LENGTH, Section, Spacer, Text, Textarea, useSnackbar } from 'lib/components'
import { useSendFeedback, UseSendFeedbackRes } from 'client/api'

export const FeedbackPage = () => {
  const { show } = useSnackbar()
  const sendFeedback = useSendFeedback()

  return (
    <Box
      paddingTop={NEB_LENGTH.px_016}
      paddingInline={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }}
      maxInlineSize="75rem"
    >
      <Section size="lg" heading="Feedback" iconName="mail">
        <Text>Help shape the future of NebulaKit. All feedback submitted here is anonymous.</Text>
        <Spacer blockSize={NEB_LENGTH.px_048} />
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
              <Textarea placeholder="Write your feedback ..." rows={10} resize="none" />
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
