import { useCallback, useState } from 'react'
import { sentenceCase } from 'change-case'

import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { useRegisterUser } from 'client/api'
import { Box, Button, Divider, Flex, Form, Input, Link, Section, Spacer, useSnackbar } from 'lib/components'

type RegisterFormValues = {
  email: string
  password: string
}

export const RegisterPage = () => {
  const [hidePassword, setHidePassword] = useState<boolean>(true)

  const { show } = useSnackbar()
  const navigateTo = useNavigateTo()

  const { sendRequest } = useRegisterUser()

  const onValidSubmission = useCallback((data: RegisterFormValues) => {
    return sendRequest(data)
  }, [])

  const onResponse = useCallback(async (res: any, formContext: any) => {
    if (res) {
      const data = res.data
      if (data) {
        if (data.errors) {
          for (const [fieldName, message] of Object.entries(data.errors)) {
            formContext.setError(fieldName, { message })
          }
        } else if (data.message) {
          show({
            status: data.ok ? 'info' : 'warning',
            content: data.message,
            heading: data.error ? sentenceCase(data.error) : undefined,
          })
        }
      }
    }
  }, [])

  return (
    <Box padding={{ base: 20, lg: 50 }}>
      <Box inlineSize="400px" maxInlineSize="100%" margin="0 auto">
        <Section heading="Registration" iconName="user-plus">
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
                Sign up
              </Form.ActionButton>
            </Form.Actions>
          </Form>
          <Spacer blockSize={40} />
          <Divider />
          <Spacer blockSize={7} />
          <Flex justifyContent="center">
            <Link
              href={`/${PageKey.authLogin}`}
              onClick={() => {
                navigateTo(`/${PageKey.authLogin}`)
              }}
            >
              <Button variant="ghost" color="blue" intent="primary">
                Already have an account? Log in.
              </Button>
            </Link>
          </Flex>
        </Section>
      </Box>
    </Box>
  )
}
