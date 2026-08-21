import { Checkbox, Input, Select } from 'lib/index.core'
import { Autocomplete, Form, MultiSelect, Switch } from 'lib/index.pro'
import { type Example } from 'client/definitions'

export const FORM_EXAMPLES: Example[] = [
  {
    code: `<Form
  onValidSubmission={data => {
    console.log(data)
  }}
>
  <Form.Fields>
    <Form.Field name="firstName">
      <Input />
    </Form.Field>
    <Form.Field name="gender">
      <Select>
        <Select.Option value="male">Male</Select.Option>
        <Select.Option value="female">Female</Select.Option>
      </Select>
    </Form.Field>
  </Form.Fields>
  <Form.Actions>
    <Form.ActionButton type="submit">Submit</Form.ActionButton>
    <Form.ActionButton type="reset">Reset</Form.ActionButton>
  </Form.Actions>
</Form>`,
    skip: true,
  },
  {
    jsx: (
      <Form onValidSubmission={null}>
        <Form.Fields>
          <Form.Field
            name="firstName"
            label="First name"
            hint="This will appear on your public profile."
          >
            <Input />
          </Form.Field>
          <Form.Field name="gender" label="Gender" hint="Used for profile personalization.">
            <Select>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Field>
          <Form.Field name="country" label="Country">
            <Autocomplete>
              <Autocomplete.Option value="PL" label="Poland">
                Poland
              </Autocomplete.Option>
              <Autocomplete.Option value="UK" label="United Kingdom">
                United Kingdom
              </Autocomplete.Option>
              <Autocomplete.Option value="DE" label="Germany">
                Germany
              </Autocomplete.Option>
              <Autocomplete.Option value="US" label="United States">
                United States
              </Autocomplete.Option>
              <Autocomplete.Option value="FR" label="France">
                France
              </Autocomplete.Option>
            </Autocomplete>
          </Form.Field>
          <Form.Field name="interests" label="Interests">
            <MultiSelect>
              <MultiSelect.Option value="music">Music</MultiSelect.Option>
              <MultiSelect.Option value="film">Film</MultiSelect.Option>
              <MultiSelect.Option value="politics">Politics</MultiSelect.Option>
              <MultiSelect.Option value="sport">Sport</MultiSelect.Option>
              <MultiSelect.Option value="technology">Technology</MultiSelect.Option>
            </MultiSelect>
          </Form.Field>
          <Form.Field name="newsletter" label="Subscribe to a newsletter">
            <Switch />
          </Form.Field>
          <Form.Field name="verified" label="I am not a robot">
            <Checkbox />
          </Form.Field>
        </Form.Fields>
        <Form.Actions flexDirection={{ base: 'column', md: 'row' }} alignItems="stretch">
          <Form.ActionButton type="submit">Submit</Form.ActionButton>
          <Form.ActionButton type="reset">Reset</Form.ActionButton>
          <Form.ActionButton type="clear">Clear</Form.ActionButton>
        </Form.Actions>
      </Form>
    ),
    description:
      'Mobile-first form with vertically stacked fields and responsive action buttons that align horizontally on wider screens.',
  },
  {
    jsx: (
      <Form
        onValidSubmission={null}
        useFormProps={{ defaultValues: { engine: 'google' } }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Form.Fields flexDirection={{ base: 'column', md: 'row' }}>
          <Form.Field name="engine">
            <Select>
              <Select.Option value="google">Google</Select.Option>
              <Select.Option value="bing">Bing</Select.Option>
              <Select.Option value="yahoo">Yahoo</Select.Option>
            </Select>
          </Form.Field>
          <Form.Field name="search" flex="4">
            <Input variant="outline" />
          </Form.Field>
        </Form.Fields>
        <Form.Actions flexDirection={{ base: 'column', md: 'row' }} alignItems="stretch">
          <Form.ActionButton type="submit">Submit</Form.ActionButton>
          <Form.ActionButton type="reset">Reset</Form.ActionButton>
          <Form.ActionButton type="clear">Clear</Form.ActionButton>
        </Form.Actions>
      </Form>
    ),
    description:
      'Mobile-first form with vertically stacked fields that transition to a horizontal layout on wider screens.',
  },
]
