import { Box, Form, Input, Section } from 'lib/components'

import { Pattern } from '../definitions'

export const CENTERED_FORM: Pattern = {
  id: 'centered-form',
  category: 'Forms',
  title: 'Centered form',
  description:
    'A medium-density form interface can be composed from Box, Section and Form while keeping layout, validation and interaction behavior explicit and locally authored.',
  jsx: (
    <Box padding={{ base: 'md', lg: 'xl' }}>
      <Box inlineSize="400px" maxInlineSize="100%" margin="0 auto">
        <Section size="lg" heading="Update profile" iconName="user">
          <Form>
            <Form.Fields>
              <Form.Field name="email" label="Email" required email minLength={5} maxLength={254}>
                <Input placeholder="name@example.com" />
              </Form.Field>
              <Form.Field name="displayName" label="Display name" required minLength={2} maxLength={32}>
                <Input placeholder="Enter display name" />
              </Form.Field>
            </Form.Fields>
            <Form.Actions>
              <Form.ActionButton type="submit" flex={{ base: '1', lg: '0' }}>
                Save changes
              </Form.ActionButton>
            </Form.Actions>
          </Form>
        </Section>
      </Box>
    </Box>
  ),
}
