import { Box, Form, Input, PasswordInput, Section } from 'lib/components'

import { Pattern } from '../../definitions'

export const LOGIN_FORM: Pattern = {
  id: 'login-form',
  category: 'Forms',
  title: 'Login form',
  description: 'Simple login form composition.',
  jsx: (
    <Box inlineSize="350px" maxInlineSize="100%" margin="0 auto">
      <Section size="lg" heading="Log in" iconName="log-in">
        <Form>
          <Form.Fields>
            <Form.Field name="email" label="Email" required email minLength={5} maxLength={254}>
              <Input placeholder="name@example.com" />
            </Form.Field>
            <Form.Field name="password" label="Password" required minLength={8} maxLength={128}>
              <PasswordInput />
            </Form.Field>
          </Form.Fields>
          <Form.Actions>
            <Form.ActionButton type="submit" flex={{ base: '1', lg: '0' }}>
              Log in
            </Form.ActionButton>
          </Form.Actions>
        </Form>
      </Section>
    </Box>
  ),
}
