import { useState } from 'react'

import { PlaygroundScenario, PlaygroundConfigurator } from 'client/components'
import { Select, SelectProps } from 'lib/components'

const OPTIONS = Array.from({ length: 25 }, (v, k) => ({ value: `option-${k + 1}`, text: `Option ${k + 1}` }))

const SelectWrapper = (selectProps: Omit<SelectProps, 'value' | 'onChange'>) => {
  const [value, setValue] = useState<string>('')

  return <Select value={value} onChange={setValue} {...selectProps} />
}

export const SelectPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']} hasSurfaceInterface>
      <PlaygroundScenario displayName="Select" title="Default" props>
        <SelectWrapper options={OPTIONS} />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Select" title="Custom placeholder" props>
        <SelectWrapper options={OPTIONS} nativeInputProps={{ placeholder: 'Click to choose ...' }} />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Select" title="Option to unselect" props>
        <SelectWrapper
          options={[{ value: '', text: '' }, ...OPTIONS]}
          nativeInputProps={{ placeholder: 'Click to choose ...' }}
        />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
