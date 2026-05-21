import { useCallback, useState } from 'react'

import { UseMakeApiRequestRes, useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'
import { PageKey } from 'client/definitions'
import { useRegisterUser } from 'client/api'

import { Box, Button, Divider, Flex, Form, Input, Link, Section, Spacer, Text, useSnackbar } from 'lib/components'

type RegisterFormValues = {
  email: string
  password: string
}

export const RegisterPage = () => {
  const [hidePassword, setHidePassword] = useState<boolean>(true)

  const user = useAppStore(state => state.user)
  const { show } = useSnackbar()
  const navigateTo = useNavigateTo()

  const registerUser = useRegisterUser()

  const onValidSubmission = useCallback((data: RegisterFormValues) => {
    return registerUser.sendRequest(data)
  }, [])

  const onResponse = useCallback(
    async (res: UseMakeApiRequestRes<typeof registerUser.data, typeof registerUser.error>, formContext: any) => {
      if (res.ok) {
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
    },
    []
  )

  if (user) {
    return null
  }

  return (
    <Box padding={{ base: 'md', lg: 'xl' }}>
      <Box inlineSize="400px" maxInlineSize="100%" margin="0 auto">
        <Section size="lg" heading="Registration" iconName="user-plus">
          <Text typography="caption" intent="secondary">
            We only use your email for account access and essential security steps. If you ever change your mind, you can
            permanently remove your account in the settings.
          </Text>
          <Spacer blockSize="md" />
          <Form<RegisterFormValues>
            onValidSubmission={onValidSubmission}
            onInvalidSubmission={errors => {
              console.log(errors)
            }}
            minLoadingTime={500}
            onResponse={onResponse}
            resetOnSuccess
          >
            <Form.Fields>
              <Form.Field name="email" label="Email" required email minLength={5} maxLength={254}>
                <Input placeholder="name@example.com" />
              </Form.Field>
              <Form.Field name="password" label="Password" required minLength={8} maxLength={128}>
                <Input
                  tagAttrs={{ type: hidePassword ? 'password' : 'text' }}
                  endAffix={props => (
                    <Button
                      {...props}
                      tagAttrs={{
                        onClick: () => setHidePassword(!hidePassword),
                      }}
                      iconName={hidePassword ? 'eye-off' : 'eye'}
                    />
                  )}
                />
              </Form.Field>
            </Form.Fields>
            <Form.Actions>
              <Form.ActionButton type="submit" flex={{ base: '1', lg: '0' }}>
                Sign up
              </Form.ActionButton>
            </Form.Actions>
          </Form>
          <Spacer blockSize="lg" />
          <Divider />
          <Spacer blockSize="sm" />
          <Flex justifyContent="center">
            <Link
              href={PageKey.authLogin}
              onClick={() => {
                navigateTo(PageKey.authLogin)
              }}
            >
              <Button variant="ghost" color="blue" intent="primary">
                Already have an account ? Log in.
              </Button>
            </Link>
          </Flex>
        </Section>
      </Box>
    </Box>
  )
}
