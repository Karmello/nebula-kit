import { useState } from 'react'

import { useNavigateTo } from 'client/services'
import { Box, Button, Divider, Flex, Form, Input, Link, Section, Spacer } from 'lib/components'

export const LoginPage = () => {
  const navigateTo = useNavigateTo()
  const [hidePassword, setHidePassword] = useState<boolean>(true)

  return (
    <Box padding={{ base: 20, lg: 50 }}>
      <Box inlineSize="400px" maxInlineSize="100%" margin="0 auto">
        <Section heading="Log in" iconName="log-in">
          <Form
            onValidSubmission={data => {
              console.log(data)
            }}
            onInvalidSubmission={errors => {
              console.log(errors)
            }}
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
                navigateTo('/register')
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
