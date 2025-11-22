import { useState } from 'react'

import { Box, Button, Form, Input, Section, useSnackbar } from 'lib/components'
import { API_URL } from 'client/definitions'

type RegisterFormValues = {
  email: string
  password: string
}

export const RegisterPage = () => {
  const [hidePassword, setHidePassword] = useState<boolean>(true)

  const { show } = useSnackbar()

  const onValidSubmission = async (data: RegisterFormValues) => {
    return fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  const onResponse = async (res: Response) => {
    if (!res.ok) {
      const body = await res.json()
      show({ status: 'danger', content: JSON.stringify(body) })
    }
  }

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
        </Section>
      </Box>
    </Box>
  )
}
