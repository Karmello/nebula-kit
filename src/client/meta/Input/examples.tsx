import { useState } from 'react'

import { ComponentMeta } from 'client/definitions'
import { Button, Input, InputProps } from 'lib/components'

const InputControlled = () => {
  const [value, setValue] = useState<string>('value')
  return <Input value={value} onChange={setValue} />
}

const INPUT_EXAMPLES_META: ComponentMeta<InputProps>['examples'] = [
  {
    description: 'Input used in uncontrolled mode with its initial value set via the "defaultValue" prop.',
    jsx: <Input defaultValue="default value" />,
  },
  {
    description: 'Input used in controlled mode with its value managed through external state.',
    jsx: <InputControlled />,
    code: `const [value, setValue] = useState<string>('value')
    \n
return (
  <Input value={value} onChange={onChange} />
)`,
  },
  {
    description: 'slots ...',
    jsx: <Input startSlot={<Button iconName="search" />} endSlot={<Button iconName="close" />} />,
  },
]

export { INPUT_EXAMPLES_META }
