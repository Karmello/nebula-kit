import { useState } from 'react'

import { useUpdatePassword, UseUpdatePasswordRes, useLogoutUser } from 'client/api'
import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { Box, Button, Form, Input, Section, Spacer, Text, useSnackbar } from 'lib/components'

export const UpdatePasswordSection = () => {
  const [hideCurrentPassword, setHideCurrentPassword] = useState<boolean>(true)
  const [hideNewPassword, setHideNewPassword] = useState<boolean>(true)

  const navigateTo = useNavigateTo()
  const { show } = useSnackbar()
  const updatePassword = useUpdatePassword()
  const logoutUser = useLogoutUser()

  return (
    <Section heading="Password" variant="outline" intent="tertiary">
      <Text>
        You can update your account password here. For security, your current password is required to complete the change.
      </Text>
      <Spacer blockSize="30px" />
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
                  <Form.Field name="currentPassword" label="Current password" required minLength={8} maxLength={128}>
                    <Input
                      tagAttrs={{
                        type: hideCurrentPassword ? 'password' : 'text',
                        autoComplete: 'current-password',
                      }}
                      placeholder="Enter password"
                      endAffix={props => (
                        <Button
                          {...props}
                          tagAttrs={{
                            onClick: () => setHideCurrentPassword(!hideCurrentPassword),
                          }}
                          iconName={hideCurrentPassword ? 'eye-off' : 'eye'}
                        />
                      )}
                    />
                  </Form.Field>
                  <Form.Field name="newPassword" label="New password" required minLength={8} maxLength={128}>
                    <Input
                      tagAttrs={{
                        type: hideNewPassword ? 'password' : 'text',
                        autoComplete: 'new-password',
                      }}
                      placeholder="Enter password"
                      endAffix={props => (
                        <Button
                          {...props}
                          tagAttrs={{
                            onClick: () => setHideNewPassword(!hideNewPassword),
                          }}
                          iconName={hideNewPassword ? 'eye-off' : 'eye'}
                        />
                      )}
                    />
                  </Form.Field>
                </Form.Fields>
                <Form.Actions>
                  <Form.ActionButton type="submit" flex={{ base: '1', md: '0' }} disabled={!isDirty}>
                    Update
                  </Form.ActionButton>
                </Form.Actions>
              </>
            )
          }}
        </Form>
      </Box>
      <Spacer blockSize="7px" />
    </Section>
  )
}
