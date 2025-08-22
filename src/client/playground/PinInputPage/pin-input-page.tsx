import { useState } from 'react'

import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { PinInput, PinInputProps } from 'lib/components'

const PinInputWrapper = (pinInputProps: Omit<PinInputProps, 'value' | 'onChange'>) => {
  const [value, onChange] = useState<number>()

  return <PinInput {...pinInputProps} value={value} onChange={onChange} />
}

export const PinInputPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']} hasSurfaceInterface>
      <PlaygroundScenario title="Default" displayName="PinInput" props>
        <PinInputWrapper />
      </PlaygroundScenario>
      <PlaygroundScenario title="Masked" displayName="PinInput" props>
        <PinInputWrapper maskInput />
      </PlaygroundScenario>
      <PlaygroundScenario title="Max number of digits" displayName="PinInput" props>
        <PinInputWrapper digitsCount="10" />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
