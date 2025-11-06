import { ComponentMeta } from 'client/definitions'
import { Form, FormProps, Input, Select } from 'lib/components'

const FORM_EXAMPLES_META: ComponentMeta<FormProps>['examples'] = [
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
    <Form.SubmitButton>Submit</Form.SubmitButton>
    <Form.ResetButton>Reset</Form.ResetButton>
  </Form.Actions>
</Form>`,
    skip: true,
  },
  {
    jsx: (
      <Form
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
        <Form.Actions flexDirection={{ base: 'column', md: 'row' }} alignItems="stretch">
          <Form.SubmitButton>Submit</Form.SubmitButton>
          <Form.ResetButton>Reset</Form.ResetButton>
        </Form.Actions>
      </Form>
    ),
    description: 'Vertically stacked form.',
  },
  {
    jsx: (
      <Form
        onValidSubmission={data => {
          console.log(data)
        }}
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
          <Form.Field name="search" flex={4}>
            <Input />
          </Form.Field>
        </Form.Fields>
        <Form.Actions flexDirection={{ base: 'column', md: 'row' }} alignItems="stretch">
          <Form.SubmitButton>Submit</Form.SubmitButton>
          <Form.ResetButton>Reset</Form.ResetButton>
        </Form.Actions>
      </Form>
    ),
    description: 'Horizontally stacked form.',
  },
]

export { FORM_EXAMPLES_META }
