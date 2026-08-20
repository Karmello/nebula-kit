import { useState } from 'react'

import { Textarea } from 'lib/index.core'
import { type Example } from 'client/definitions'

const TextareaControlled = () => {
  const [value, setValue] = useState<string>('value')
  return <Textarea value={value} onChange={setValue} />
}

export const TEXTAREA_EXAMPLES: Example[] = [
  {
    description: 'Textarea used in uncontrolled mode with its initial value set via the "defaultValue" prop.',
    jsx: <Textarea defaultValue="default value" />,
  },
  {
    description: 'Textarea used in controlled mode with its value managed through external state.',
    jsx: <TextareaControlled />,
    code: `const [value, setValue] = useState<string>('value')
    \n
return (
  <Textarea value={value} onChange={onChange} />
)`,
  },
  {
    description: 'Disabled Textarea.',
    jsx: <Textarea defaultValue="default value" disabled />,
  },
]
