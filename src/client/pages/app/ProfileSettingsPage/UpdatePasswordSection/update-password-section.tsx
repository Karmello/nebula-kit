import {
  Box,
  Form,
  NEB_LENGTH,
  PasswordInput,
  Section,
  Spacer,
  Text,
  useSnackbar,
} from 'lib/components'
import { useLogoutUser, useUpdatePassword, UseUpdatePasswordRes } from 'client/api'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'

export const UpdatePasswordSection = () => {
  const navigateTo = useNavigateTo()
  const { show } = useSnackbar()
  const updatePassword = useUpdatePassword()
  const logoutUser = useLogoutUser()

  return (
    <Section heading="Password" variant="outline" intent="tertiary">
      <Text>
        You can update your account password here. For security, your current password is required
        to complete the change.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_024} />
      <Box maxInlineSize={{ md: '350px' }}>
        <Form<{ currentPassword: string; newPassword: string }>
          useFormProps={{
            defaultValues: { currentPassword: '', newPassword: '' },
          }}
          onValidSubmission={async ({ currentPassword, newPassword }) => {
            return await updatePassword.sendRequest({ currentPassword, newPassword })
          }}
          onResponse={async (res: UseUpdatePasswordRes, formContext) => {
            formContext.reset()
            if (!res.ok) {
              show({ status: res.code >= 500 ? 'error' : 'warning', content: res.error.message })
            } else {
              await logoutUser.sendRequest()
              navigateTo(PageKey.authLogin)
              show({ status: 'success', content: res.data.message })
            }
          }}
          resetOnSuccess
        >
          {({ formState: { isDirty } }) => {
            return (
              <>
                <Form.Fields>
                  <Form.Field
                    name="currentPassword"
                    label="Current password"
                    required
                    minLength={8}
                    maxLength={128}
                  >
                    <PasswordInput autoComplete="current-password" placeholder="Enter password" />
                  </Form.Field>
                  <Form.Field
                    name="newPassword"
                    label="New password"
                    required
                    minLength={8}
                    maxLength={128}
                  >
                    <PasswordInput autoComplete="new-password" placeholder="Enter password" />
                  </Form.Field>
                </Form.Fields>
                <Form.Actions>
                  <Form.ActionButton
                    type="submit"
                    flex={{ base: '1', md: '0' }}
                    disabled={!isDirty}
                  >
                    Update
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
