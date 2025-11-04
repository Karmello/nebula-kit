import { useState } from 'react'

import { ComponentMeta } from 'client/definitions'
import { Select, SelectProps } from 'lib/components'

const SelectControlled = () => {
  const [value, setValue] = useState<string>('option-1')
  return (
    <Select value={value} onChange={setValue}>
      <Select.Option value="option-1">Option 1</Select.Option>
      <Select.Option value="option-2">Option 2</Select.Option>
      <Select.Option value="option-3">Option 3</Select.Option>
    </Select>
  )
}

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
    code: `<Select defaultValue="option-1">
  <Select.Option value='option-1'>Option 1</Select.Option>
  <Select.Option value='option-2'>Option 2</Select.Option>
  <Select.Option value='option-3'>Option 3</Select.Option>
</Select>`,
  },
  {
    description: 'Select used in controlled mode with its value managed through external state.',
    jsx: <SelectControlled />,
    code: `const [value, setValue] = useState<string>('option-1')
    \n
return (
  <Select value={value} onChange={onChange}>
    <Select.Option value='option-1'>Option 1</Select.Option>
    <Select.Option value='option-2'>Option 2</Select.Option>
    <Select.Option value='option-3'>Option 3</Select.Option>
  </Select>
)`,
  },
]

export { SELECT_EXAMPLES_META }
