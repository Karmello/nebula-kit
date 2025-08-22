import { useState } from 'react'

import { NumericStepper, NumericStepperProps } from 'lib/components'
import { PlaygroundScenario, PlaygroundConfigurator } from 'client/components'

const NumericStepperWrapper = (numericStepperPage: Omit<NumericStepperProps, 'value' | 'onChange'>) => {
  const [value, setValue] = useState<number>(numericStepperPage.defaultValue)

  return <NumericStepper {...numericStepperPage} value={value} onChange={setValue} />
}

export const NumericStepperPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']}>
      <PlaygroundScenario displayName="NumericStepper" title="Default" props>
        <NumericStepperWrapper defaultValue={0} />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="NumericStepper" title="With min and max values" props>
        <NumericStepperWrapper defaultValue={0} min={-10} max={10} />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="NumericStepper" title="With set edge value buttons" props>
        <NumericStepperWrapper defaultValue={0} min={-100} max={100} showSetEdgeValueBtns />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="NumericStepper" title="With custom step" props>
        <NumericStepperWrapper defaultValue={0} min={-10} max={10} step={0.1} />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="NumericStepper" title="With value mapped to custom label" props>
        <NumericStepperWrapper
          defaultValue={0}
          min={-10}
          max={10}
          step={0.1}
          valueToLabel={value => `${value}x`}
        />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
