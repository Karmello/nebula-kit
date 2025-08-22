import { useState } from 'react'

import { Autocomplete, AutocompleteProps } from 'lib/components'
import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { COUNTRIES } from 'client/constants'

const AutocompleteWrapper = (autocompleteProps: Omit<AutocompleteProps, 'value' | 'onChange'>) => {
  const [value, setValue] = useState<string>('')

  return <Autocomplete value={value} onChange={setValue} {...autocompleteProps} />
}

export const AutocompletePage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']} hasSurfaceInterface>
      <PlaygroundScenario displayName="Autocomplete" title="Default" props>
        <AutocompleteWrapper options={COUNTRIES} />
      </PlaygroundScenario>
      <PlaygroundScenario displayName="Autocomplete" title="Custom placeholder" props>
        <AutocompleteWrapper options={COUNTRIES} nativeInputProps={{ placeholder: 'Filter ...' }} />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
