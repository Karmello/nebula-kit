import { useState } from 'react'

import { ComponentMeta } from 'client/definitions'
import { Select, SelectProps } from 'lib/components'

const OPTIONS = [
  { value: 'option-1', label: 'Option 1' },
  { value: 'option-2', label: 'Option 2' },
  { value: 'option-3', label: 'Option 3' },
]

const SelectControlled = () => {
  const [value, setValue] = useState<string>('option-1')
  return <Select options={OPTIONS} value={value} onChange={setValue} />
}

const SELECT_EXAMPLES_META: ComponentMeta<SelectProps>['examples'] = [
  {
    description: 'Select used in uncontrolled mode with its initial value set via the "defaultValue" prop.',
    jsx: <Select options={OPTIONS} defaultValue="option-1" />,
    code: `<Select
  options={[
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2' },
    { value: 'option-3', label: 'Option 3' },
  ]}
  defaultValue="option-1"
/>`,
  },
  {
    description: 'Select used in controlled mode with its value managed through external state.',
    jsx: <SelectControlled />,
    code: `const [value, setValue] = useState<string>('option-1')
    \n
return (
  <Select
    options={[
      { value: 'option-1', label: 'Option 1' },
      { value: 'option-2', label: 'Option 2' },
      { value: 'option-3', label: 'Option 3' },
    ]}
    value={value}
    onChange={setValue}
  />
)`,
  },
]

export { SELECT_EXAMPLES_META }
