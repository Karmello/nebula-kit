import { useState } from 'react'

import { Checkbox, CheckboxProps } from 'lib/components'
import { PlaygroundScenario, PlaygroundConfigurator } from 'client/components'

const CheckboxWrapper = (checkboxProps: Partial<CheckboxProps>) => {
  const [value, setValue] = useState<boolean>(checkboxProps.value || false)

  return <Checkbox value={value} onChange={setValue} label={checkboxProps.label} {...checkboxProps} />
}

export const CheckboxPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']} hasSurfaceInterface>
      <PlaygroundScenario displayName="Checkbox" title="Default" props>
        <CheckboxWrapper />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Checkbox" title="With label" props>
        <CheckboxWrapper label="I confirm" />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
