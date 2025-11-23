import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import { useNavigateTo } from 'client/services'
import { useAppStore } from 'client/store'
import { PageKey } from 'client/definitions'
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
  const { setToken } = useAppStore()

  useEffect(() => {
    const params = new URLSearchParams(search)
    if (params.get('verified') === 'true') {
      show({ status: 'success', content: 'Email verified ! You can log in now.' })
    }
  }, [search])

  const onValidSubmission = useCallback((data: LoginFormValues) => {
    return fetch(process.env.API_URL + '/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }, [])

  const onResponse = useCallback(async (res: Response) => {
    if (res) {
      const body = await res.json()
      if (body?.message) {
        show({ status: 'warning', content: body.message })
      }
      if (body?.token) {
        setToken(body.token)
      }
    }
  }, [])

  return (
    <Box padding={{ base: 20, lg: 50 }}>
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
              <Form.ActionButton type="submit" flex={{ base: 1, lg: 0 }}>
                Log in
              </Form.ActionButton>
            </Form.Actions>
          </Form>
          <Spacer blockSize={40} />
          <Divider />
          <Spacer blockSize={7} />
          <Flex justifyContent="center">
            <Link
              href="/register"
              onClick={() => {
                navigateTo(`/${PageKey.register}`)
              }}
            >
              <Button variant="ghost" color="blue" intent="primary">
                Don't have an account? Sign up
              </Button>
            </Link>
          </Flex>
        </Section>
      </Box>
    </Box>
  )
}
