import { useState } from 'react'

import { DateSelect, DateSelectProps, DateSelectValue } from 'lib/components'
import { PlaygroundScenario, PlaygroundConfigurator } from 'client/components'

const DateSelectWrapper = (dateSelectProps: Partial<DateSelectProps>) => {
  const [value, setValue] = useState<DateSelectValue>({
    year: '',
    month: '',
    day: '',
  })

  return <DateSelect value={value} onChange={setValue} {...dateSelectProps} />
}

export const DateSelectPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']}>
      <PlaygroundScenario displayName="DateSelect" props>
        <DateSelectWrapper />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
