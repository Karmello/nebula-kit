import { ComponentMeta } from 'client/definitions'
import { Form, FormProps, Input, Select } from 'lib/components'

const FORM_EXAMPLES_META: ComponentMeta<FormProps>['examples'] = [
  {
    jsx: (
      <Form>
        <Form.Field>
          <Input />
        </Form.Field>
        <Form.Field>
          <Select>
            <Select.Option value="option-1">Option 1</Select.Option>
            <Select.Option value="option-2">Option 2</Select.Option>
            <Select.Option value="option-3">Option 3</Select.Option>
          </Select>
        </Form.Field>
      </Form>
    ),
  },
]

export { FORM_EXAMPLES_META }
