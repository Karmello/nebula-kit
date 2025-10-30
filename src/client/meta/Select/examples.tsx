import { ComponentMeta } from 'client/definitions'
import { Select, SelectProps } from 'lib/components'

const SELECT_EXAMPLES_META: ComponentMeta<SelectProps>['examples'] = [
  {
    description: 'Basic Select.',
    jsx: (
      <Select
        options={[
          { value: 'option-1', label: 'Option 1' },
          { value: 'option-2', label: 'Option 2' },
          { value: 'option-3', label: 'Option 3' },
        ]}
        defaultValue="option-1"
      />
    ),
    code: `<Select
  options={[
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2' },
    { value: 'option-3', label: 'Option 3' },
  ]}
  value="option-1"
  onChange={value => {
    console.log(value)
  }}
/>`,
  },
]

export { SELECT_EXAMPLES_META }
