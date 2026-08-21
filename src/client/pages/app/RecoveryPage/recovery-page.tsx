import { useLocation } from 'react-router'

import {
  Box,
  Button,
  Divider,
  Flex,
  Form,
  Input,
  Link,
  NEB_LENGTH,
  PasswordInput,
  Section,
  Spacer,
  useSnackbar,
} from 'lib/components'
import { useRecoverPassword, useRecoverPasswordConfirm, UseRecoverPasswordRes } from 'client/api'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'

export const RecoveryPage = () => {
  const user = useAppStore(state => state.user)
  const { search } = useLocation()
  const navigateTo = useNavigateTo()
  const { show } = useSnackbar()

  const recoverPassword = useRecoverPassword()
  const recoverPasswordConfirm = useRecoverPasswordConfirm()

  const params = new URLSearchParams(search)
  const token = params.get('token')

  if (user) {
    return null
  }

  return (
    <Box padding={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }}>
      <Box inlineSize="400px" maxInlineSize="100%" margin="0 auto">
        <Section size="lg" heading="Password recovery" iconName="key-round">
          <Form<{ email?: string; newPassword?: string }>
            onValidSubmission={async ({ email, newPassword }) => {
              if (!token) {
                return await recoverPassword.sendRequest({ email })
              } else {
                return await recoverPasswordConfirm.sendRequest({ newPassword, token })
              }
            }}
            onResponse={(res: UseRecoverPasswordRes) => {
              if (res.ok && res.data.message) {
                show({ status: 'info', content: res.data.message })
                if (token) {
                  navigateTo(PageKey.authLogin)
                }
              }
            }}
            minLoadingTime={500}
            resetOnSuccess
          >
            <Form.Fields>
              {!token ? (
                <Form.Field name="email" label="Email" required email minLength={5} maxLength={254}>
                  <Input tagAttrs={{ autoComplete: 'off' }} placeholder="Enter email address" />
                </Form.Field>
              ) : (
                <Form.Field name="newPassword" label="New password" required minLength={8} maxLength={128}>
                  <PasswordInput placeholder="Enter password" autoComplete="off" />
                </Form.Field>
              )}
            </Form.Fields>
            <Form.Actions>
              <Form.ActionButton type="submit" flex={{ base: '1', lg: '0' }}>
                {!token ? 'Recover' : 'Update'}
              </Form.ActionButton>
            </Form.Actions>
          </Form>
          <Spacer blockSize={NEB_LENGTH.px_048} />
          <Divider />
          <Spacer blockSize={NEB_LENGTH.px_016} />
          <Flex justifyContent="center">
            <Link
              href={PageKey.authLogin}
              onClick={() => {
                navigateTo(PageKey.authLogin)
              }}
            >
              <Button
                variant="ghost"
                color="blue"
                intent="primary"
                iconName="arrow-left"
                disabled={recoverPassword.isMakingRequest || recoverPasswordConfirm.isMakingRequest}
              >
                Back
              </Button>
            </Link>
          </Flex>
        </Section>
      </Box>
    </Box>
  )
}
