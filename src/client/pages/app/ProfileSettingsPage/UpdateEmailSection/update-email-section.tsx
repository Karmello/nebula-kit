import { Box, Form, Input, NEB_LENGTH, Section, Spacer, Text, useSnackbar } from 'lib/components'
import { useLogoutUser, useRequestEmailUpdate, UseRequestEmailUpdateRes } from 'client/api'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'

export const UpdateEmailSection = () => {
  const navigateTo = useNavigateTo()
  const { show } = useSnackbar()
  const requestEmailUpdate = useRequestEmailUpdate()
  const logoutUser = useLogoutUser()

  return (
    <Section heading="Email address" variant="outline" intent="tertiary">
      <Text>
        In case you need to update your email address, you can request a change by providing a new
        one. A verification link will be sent to that address. After confirming it, you'll be able
        to sign in with the new email using your existing password. Your current email remains
        active until you complete the first login with the new one, so you always retain access
        throughout the process.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_024} />
      <Box maxInlineSize={{ md: '500px' }}>
        <Form<{ email: string }>
          useFormProps={{
            defaultValues: { email: '' },
          }}
          onValidSubmission={async ({ email }) => {
            return await requestEmailUpdate.sendRequest({ email })
          }}
          onResponse={async (res: UseRequestEmailUpdateRes, formContext: any) => {
            if (res.ok) {
              await logoutUser.sendRequest()
              navigateTo(PageKey.authLogin)
              show({ status: 'info', content: res.data.message })
            } else {
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
          flexWrap={{ md: 'wrap' }}
          alignItems={{ base: 'stretch', md: 'flex-end' }}
        >
          {({ formState: { isDirty } }) => {
            return (
              <>
                <Form.Fields>
                  <Form.Field
                    name="email"
                    label="New email"
                    required
                    email
                    minLength={5}
                    maxLength={254}
                  >
                    <Input placeholder="Enter email address" tagAttrs={{ autoComplete: 'off' }} />
                  </Form.Field>
                </Form.Fields>
                <Form.Actions>
                  <Form.ActionButton
                    flex={{ base: '1', md: '0' }}
                    type="submit"
                    disabled={!isDirty}
                  >
                    Request update
                  </Form.ActionButton>
                </Form.Actions>
              </>
            )
          }}
        </Form>
      </Box>
      <Spacer blockSize={NEB_LENGTH.px_008} />
    </Section>
  )
}
