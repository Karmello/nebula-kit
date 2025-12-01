import { useRequestEmailUpdate, UseRequestEmailUpdateRes } from 'client/api'
import { useAppStore } from 'client/store'
import { Box, Form, Input, Section, useSnackbar } from 'lib/components'

export const UpdateEmailSection = () => {
  const { setToken } = useAppStore()
  const { show } = useSnackbar()
  const requestEmailUpdate = useRequestEmailUpdate()

  return (
    <Section heading="Request email update" variant="soft-outline" intent="neutral" borderIntent="muted">
      <Box maxInlineSize={{ md: '500px' }}>
        <Form<{ email: string }>
          useFormProps={{
            defaultValues: { email: '' },
          }}
          onValidSubmission={async ({ email }) => {
            return await requestEmailUpdate.sendRequest({ email })
          }}
          onResponse={(res: UseRequestEmailUpdateRes, formContext: any) => {
            if (res.data) {
              show({ status: 'info', content: res.data.message })
              setToken(null)
            } else if (res.error) {
              if (res.error.errors) {
                for (const [fieldName, message] of Object.entries(res.error.errors)) {
                  formContext.setError(fieldName, { message })
                }
              } else if (res.error.message) {
                show({ status: res.code === 500 ? 'error' : 'warning', content: res.error.message })
              }
            }
          }}
          resetOnSuccess
          flexDirection={{ base: 'column', md: 'row' }}
          flexWrap="wrap"
          alignItems={{ base: 'stretch', md: 'flex-end' }}
        >
          <Form.Fields>
            <Form.Field name="email" label="New email" required email minLength={5} maxLength={254}>
              <Input tagAttrs={{ autoComplete: 'off' }} />
            </Form.Field>
          </Form.Fields>
          <Form.Actions>
            <Form.ActionButton flex={{ base: 1, md: 0 }} type="submit">
              Send request
            </Form.ActionButton>
          </Form.Actions>
        </Form>
      </Box>
    </Section>
  )
}
