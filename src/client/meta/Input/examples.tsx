import { useState } from 'react'

import { Input } from 'lib/index.core'
import { type Example } from 'client/definitions'

const InputControlled = () => {
  const [value, setValue] = useState<string>('value')
  return <Input value={value} onChange={setValue} />
}

export const INPUT_EXAMPLES: Example[] = [
  {
    description:
      'Input used in uncontrolled mode with its initial value set via the "defaultValue" prop.',
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
    description: 'Disabled Input.',
    jsx: <Input disabled value="value" />,
    code: `<Input disabled />`,
  },
]
