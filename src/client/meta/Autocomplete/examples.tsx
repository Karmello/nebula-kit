import { Autocomplete } from 'lib/index.pro'
import { type Example } from 'client/definitions'

export const AUTOCOMPLETE_EXAMPLES: Example[] = [
  {
    description: 'Autocomplete used in uncontrolled mode.',
    jsx: (
      <Autocomplete noOptionsLabel="Nothing found">
        <Autocomplete.Option value="PL" label="Poland">
          Poland
        </Autocomplete.Option>
        <Autocomplete.Option value="UK" label="United Kingdom">
          United Kingdom
        </Autocomplete.Option>
        <Autocomplete.Option value="DE" label="Germany">
          Germany
        </Autocomplete.Option>
        <Autocomplete.Option value="US" label="United States">
          United States
        </Autocomplete.Option>
        <Autocomplete.Option value="FR" label="France">
          France
        </Autocomplete.Option>
      </Autocomplete>
    ),
  },
]
