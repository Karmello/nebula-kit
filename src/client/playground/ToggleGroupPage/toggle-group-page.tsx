import { useState } from 'react'

import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { ToggleGroup, ToggleGroupProps } from 'lib/components'

const OPTIONS = Array.from({ length: 5 }, (v, k) => ({
  value: `value-${k + 1}`,
  buttonProps: { children: `Option ${k + 1}` },
}))

const ToggleGroupWrapper = (toggleGroupProps: Omit<ToggleGroupProps, 'value' | 'onChange'>) => {
  const [value, onChange] = useState<string>('')

  return <ToggleGroup {...toggleGroupProps} value={value} onChange={onChange} />
}

export const ToggleGroupPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']}>
      <PlaygroundScenario displayName="ToggleGroup" props>
        <ToggleGroupWrapper options={OPTIONS} />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
