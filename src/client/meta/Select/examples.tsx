import { useState } from 'react'

import { ComponentMeta } from 'client/definitions'
import { Select, SelectProps } from 'lib/components'

const SelectControlled = (selectProps: Partial<SelectProps>) => {
  const [value, setValue] = useState<string>('option-1')
  return (
    <Select {...selectProps} value={value} onChange={setValue}>
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
  <Select.Option value="option-1">Option 1</Select.Option>
  <Select.Option value="option-2">Option 2</Select.Option>
  <Select.Option value="option-3">Option 3</Select.Option>
</Select>`,
  },
  {
    description: 'Select used in controlled mode with its value managed through external state.',
    jsx: <SelectControlled />,
    code: `const [value, setValue] = useState<string>("option-1")
    \n
return (
  <Select value={value} onChange={onChange}>
    <Select.Option value="option-1">Option 1</Select.Option>
    <Select.Option value="option-2">Option 2</Select.Option>
    <Select.Option value="option-3">Option 3</Select.Option>
  </Select>
)`,
  },
  {
    description: 'Select rendered with a custom inline size.',
    jsx: <SelectControlled inlineSize="200px" />,
    code: `const [value, setValue] = useState<string>("option-1")
    \n
return (
  <Select value={value} onChange={onChange} inlineSize="200px">
    <Select.Option value="option-1">Option 1</Select.Option>
    <Select.Option value="option-2">Option 2</Select.Option>
    <Select.Option value="option-3">Option 3</Select.Option>
  </Select>
)`,
  },
  {
    description: 'Select configured to open above the trigger element.',
    jsx: <SelectControlled inlineSize="200px" dropdownPlacement="top-start" />,
    code: `const [value, setValue] = useState<string>("option-1")
    \n
return (
  <Select value={value} onChange={onChange} inlineSize="200px" dropdownPlacement="top-start">
    <Select.Option value="option-1">Option 1</Select.Option>
    <Select.Option value="option-2">Option 2</Select.Option>
    <Select.Option value="option-3">Option 3</Select.Option>
  </Select>
)`,
  },
]

export { SELECT_EXAMPLES_META }
