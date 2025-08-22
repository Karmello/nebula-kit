import { useState } from 'react'

import { Scale, ScaleProps } from 'lib/components'
import { PlaygroundScenario, PlaygroundConfigurator } from 'client/components'

const ScaleWrapper = (scaleProps: Omit<ScaleProps, 'values' | 'onChange'>) => {
  const [values, setValues] = useState<string[]>([])

  return <Scale values={values} onChange={setValues} {...scaleProps} />
}

export const ScalePage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']}>
      <PlaygroundScenario displayName="Scale" title="Level mode" props>
        <ScaleWrapper
          options={Array.from({ length: 10 }, (v, k) => ({ value: String(k), text: String(k + 1) }))}
        />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Scale" title="Range mode" props>
        <ScaleWrapper
          options={Array.from({ length: 10 }, (v, k) => ({
            value: String(k),
            text: `${k * 5 + 5}k`,
          }))}
          mode="range"
        />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
