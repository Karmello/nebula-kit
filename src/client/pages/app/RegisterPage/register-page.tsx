import { Box, Form, Input, Section } from 'lib/components'

export const RegisterPage = () => {
  return (
    <Box padding={{ base: 20, lg: 50 }}>
      <Box inlineSize="400px" maxInlineSize="100%" margin="0 auto">
        <Section heading="Registration" iconName="user-plus">
          <Form
            onValidSubmission={data => {
              console.log(data)
            }}
          >
            <Form.Fields>
              <Form.Field name="email" label="Email">
                <Input />
              </Form.Field>
              <Form.Field name="password" label="Password">
                <Input />
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
