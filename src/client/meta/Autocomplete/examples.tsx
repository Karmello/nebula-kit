import { ComponentMeta } from 'client/definitions'
import { Autocomplete, AutocompleteProps } from 'lib/components'

const AUTOCOMPLETE_EXAMPLES_META: ComponentMeta<AutocompleteProps>['examples'] = [
  {
    description:
      'Autocomplete used in uncontrolled mode with its initial value set via the "defaultValue" prop.',
    jsx: (
      <Autocomplete>
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
  // {
  //   description: 'Autocomplete rendered with a custom inline size.',
  //   jsx: (
  //     <Autocomplete defaultValue="option-1" inlineSize="200px">
  //       <Autocomplete.Option value="option-1">Option 1</Autocomplete.Option>
  //       <Autocomplete.Option value="option-2">Option 2</Autocomplete.Option>
  //       <Autocomplete.Option value="option-3">Option 3</Autocomplete.Option>
  //     </Autocomplete>
  //   ),
  // },
  // {
  //   description: 'Autocomplete configured to open above the trigger element.',
  //   jsx: (
  //     <Autocomplete defaultValue="option-1" inlineSize="200px" dropdownPlacement="top-start">
  //       <Autocomplete.Option value="option-1">Option 1</Autocomplete.Option>
  //       <Autocomplete.Option value="option-2">Option 2</Autocomplete.Option>
  //       <Autocomplete.Option value="option-3">Option 3</Autocomplete.Option>
  //     </Autocomplete>
  //   ),
  // },
  // {
  //   description: 'Disabled Autocomplete.',
  //   jsx: (
  //     <Autocomplete defaultValue="option-1" inlineSize="200px" disabled>
  //       <Autocomplete.Option value="option-1">Option 1</Autocomplete.Option>
  //       <Autocomplete.Option value="option-2">Option 2</Autocomplete.Option>
  //       <Autocomplete.Option value="option-3">Option 3</Autocomplete.Option>
  //     </Autocomplete>
  //   ),
  // },
]

export { AUTOCOMPLETE_EXAMPLES_META }
