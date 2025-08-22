import { useState } from 'react'

import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { MultiSelect, MultiSelectProps } from 'lib/components'

const OPTIONS = Array.from({ length: 25 }, (v, k) => ({ value: `option-${k + 1}`, text: `Option ${k + 1}` }))

const MultiSelectWrapper = (selectProps: Omit<MultiSelectProps, 'values' | 'onChange'>) => {
  const [values, setValues] = useState<string[]>([])

  return <MultiSelect values={values} onChange={setValues} {...selectProps} />
}

export const MultiSelectPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']} hasSurfaceInterface>
      <PlaygroundScenario displayName="Select" title="Default" props>
        <MultiSelectWrapper options={OPTIONS} />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
