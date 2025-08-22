import { useState } from 'react'

import { PlaygroundScenario, PlaygroundConfigurator } from 'client/components'
import { Input, InputProps } from 'lib/components'

const InputWrapper = (inputProps: Partial<InputProps>) => {
  const [value, setValue] = useState<string>('')

  return <Input value={value} onChange={setValue} {...inputProps} />
}

export const InputPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']} hasSurfaceInterface>
      <PlaygroundScenario displayName="Input" title="Default" props>
        <InputWrapper />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Input" title="Custom placeholder" props>
        <InputWrapper nativeInputProps={{ placeholder: 'Type in something' }} />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Input" title="Clearable" props>
        <InputWrapper icon="clear-text" />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Input" title="Password" props>
        <InputWrapper icon="toggle-password" />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Input" title="Max length = 25 chars" props>
        <InputWrapper nativeInputProps={{ maxLength: 25 }} />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
