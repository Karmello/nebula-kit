import { ComponentMeta } from 'client/definitions'
import { Select, SelectProps } from 'lib/components'

const SELECT_EXAMPLES_META: ComponentMeta<SelectProps>['examples'] = [
  {
    description: 'Select used in uncontrolled mode with its initial value set via the "defaultValue" prop.',
    jsx: (
      <Select defaultValue="option-1">
        <Select.Option value="option-1">Option 1</Select.Option>
        <Select.Option value="option-2">Option 2</Select.Option>
        <Select.Option value="option-3">Option 3</Select.Option>
      </Select>
    ),
  },
  {
    description: 'Select rendered with a custom inline size.',
    jsx: (
      <Select defaultValue="option-1" inlineSize="200px">
        <Select.Option value="option-1">Option 1</Select.Option>
        <Select.Option value="option-2">Option 2</Select.Option>
        <Select.Option value="option-3">Option 3</Select.Option>
      </Select>
    ),
  },
  {
    description: 'Disabled Select.',
    jsx: (
      <Select defaultValue="option-1" inlineSize="200px" disabled>
        <Select.Option value="option-1">Option 1</Select.Option>
        <Select.Option value="option-2">Option 2</Select.Option>
        <Select.Option value="option-3">Option 3</Select.Option>
      </Select>
    ),
  },
]

export { SELECT_EXAMPLES_META }
