import { useState } from 'react'

import { CheckboxGroup, CheckboxGroupProps } from 'lib/components'
import { PlaygroundScenario, PlaygroundConfigurator } from 'client/components'

const CheckboxGroupWrapper = (checkboxGroupProps: Omit<CheckboxGroupProps, 'values' | 'onChange'>) => {
  const [values, setValues] = useState<string[]>([])
  return <CheckboxGroup values={values} onChange={setValues} {...checkboxGroupProps} />
}

export const CheckboxGroupPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']}>
      <PlaygroundScenario displayName="CheckboxGroup" title="Single selection" props>
        <CheckboxGroupWrapper
          options={[
            { value: 'female', text: 'Female' },
            { value: 'male', text: 'Male' },
          ]}
        />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="CheckboxGroup" title="Multi selection" props>
        <CheckboxGroupWrapper
          options={[
            { value: '1', text: 'Full-time' },
            { value: '2', text: 'Part-time' },
            {
              value: '3',
              text: 'Practice / Internship',
            },
            { value: '4', text: 'Freelance' },
          ]}
          multiSelection
        />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="CheckboxGroup" title="Multi selection (column)" props>
        <CheckboxGroupWrapper
          options={[
            { value: '1', text: 'Full-time' },
            { value: '2', text: 'Part-time' },
            {
              value: '3',
              text: 'Practice / Internship',
            },
            { value: '4', text: 'Freelance' },
          ]}
          multiSelection
          direction="column"
        />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
