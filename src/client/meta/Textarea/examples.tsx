import { useState } from 'react'

import { ComponentMeta } from 'client/definitions'
import { Textarea, TextareaProps } from 'lib/components'

const TextareaControlled = () => {
  const [value, setValue] = useState<string>('value')
  return <Textarea value={value} onChange={setValue} />
}

const TEXTAREA_EXAMPLES_META: ComponentMeta<TextareaProps>['examples'] = [
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
]

export { TEXTAREA_EXAMPLES_META }
