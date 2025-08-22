import { useState } from 'react'

import { Textarea, TextareaProps } from 'lib/components'
import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'

const TextareaWrapper = (textareaProps: Partial<TextareaProps>) => {
  const [value, setValue] = useState<string>('')

  return <Textarea value={value} onChange={setValue} {...textareaProps} />
}

export const TextareaPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']} hasSurfaceInterface>
      <PlaygroundScenario displayName="Textarea" title="Default" props>
        <TextareaWrapper />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Textarea" title="Custom placeholder" props>
        <TextareaWrapper nativeTextareaProps={{ placeholder: 'Enter some short description' }} />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Textarea" title="Clearable" props>
        <TextareaWrapper clearable />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
