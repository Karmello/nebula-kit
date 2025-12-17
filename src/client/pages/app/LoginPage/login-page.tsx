import { useCallback, useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router'

import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'
import { PageKey } from 'client/definitions'
import { useLoginUser, UseLoginUserRes } from 'client/api'
import { Box, Button, Divider, Flex, Form, Input, Link, Section, Spacer, useSnackbar } from 'lib/components'

type LoginFormValues = {
  email: string
  password: string
}

export const LoginPage = () => {
  const [hidePassword, setHidePassword] = useState<boolean>(true)

  const { search } = useLocation()
  const navigateTo = useNavigateTo()
  const { show } = useSnackbar()
  const { user, setUser } = useAppStore()

  const loginUser = useLoginUser()

  const runAsync = async () => {
    const params = new URLSearchParams(search)

    if (params.get('email_verified') === 'true') {
      window.history.replaceState({}, '', PageKey.authLogin)
      show({ status: 'success', content: 'Email verified ! You can log in now.' })
    } else if (params.get('new_email_verified') === 'true') {
      window.history.replaceState({}, '', PageKey.authLogin)
      show({ status: 'info', content: 'Log in using your new email to finalize the update.' })
    } else if (params.get('account_deactivated') === 'true') {
      window.history.replaceState({}, '', PageKey.authLogin)
      show({ status: 'success', content: 'Your account has been fully deactivated.' })
    } else if (params.get('unauthorized') === 'true') {
      window.history.replaceState({}, '', PageKey.authLogin)
      show({ status: 'info', content: 'Your session has ended. Please log in again.' })
    }
  }

  useLayoutEffect(() => {
    runAsync()
  }, [search])

  const onValidSubmission = useCallback((data: LoginFormValues) => {
    return loginUser.sendRequest(data)
  }, [])

  const onResponse = useCallback(
    async (res: UseLoginUserRes) => {
      if (res.ok) {
        setUser(res.data.user)
        navigateTo(res.data.user.plan === 'free' ? PageKey.pricing : PageKey.profileAccount, {
          replace: true,
        })
      } else {
        show({ status: res.code === 500 ? 'error' : 'warning', content: res.error.message })
      }
    },
    [show]
  )

  if (user) {
    return null
  }

  return (
    <Box padding={{ base: '20px', lg: '50px' }}>
      <Box inlineSize="400px" maxInlineSize="100%" margin="0 auto">
        <Section heading="Log in" iconName="log-in">
          <Form
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
                <Input tagAttrs={{ placeholder: 'name@example.com' }} />
              </Form.Field>
              <Form.Field name="password" label="Password" required minLength={8} maxLength={128}>
                <Input
                  tagAttrs={{ type: hidePassword ? 'password' : 'text' }}
                  endSlot={
                    <Button
                      tagAttrs={{
                        onClick: () => setHidePassword(!hidePassword),
                      }}
                      iconName={hidePassword ? 'eye-off' : 'eye'}
                    />
                  }
                />
              </Form.Field>
            </Form.Fields>
            <Form.Actions>
              <Form.ActionButton type="submit" flex={{ base: '1', lg: '0' }}>
                Log in
              </Form.ActionButton>
            </Form.Actions>
          </Form>
          <Spacer blockSize="40px" />
          <Divider />
          <Spacer blockSize="15px" />
          <Flex justifyContent="center">
            <Link
              href={PageKey.authRegister}
              onClick={() => {
                navigateTo(PageKey.authRegister)
              }}
            >
              <Button variant="ghost" color="blue" intent="primary">
                Don't have an account ? Sign up.
              </Button>
            </Link>
          </Flex>
          <Flex justifyContent="center">
            <Link
              href={PageKey.authRecover}
              onClick={() => {
                navigateTo(PageKey.authRecover)
              }}
            >
              <Button variant="ghost" color="blue" intent="primary">
                Forgot your password ? Click here.
              </Button>
            </Link>
          </Flex>
        </Section>
      </Box>
    </Box>
  )
}
