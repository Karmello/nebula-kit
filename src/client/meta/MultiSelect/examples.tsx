import { MultiSelect } from 'lib/index.pro'
import { type DocExample } from 'client/definitions'

export const MULTI_SELECT_EXAMPLES: DocExample[] = [
  {
    description:
      'MultiSelect used in uncontrolled mode with its initial value set via the "defaultValue" prop.',
    jsx: (
      <MultiSelect defaultValue={['option-1']}>
        <MultiSelect.Option value="option-1">Option 1</MultiSelect.Option>
        <MultiSelect.Option value="option-2">Option 2</MultiSelect.Option>
        <MultiSelect.Option value="option-3">Option 3</MultiSelect.Option>
      </MultiSelect>
    ),
  },
  {
    description: 'MultiSelect rendered with a custom inline size.',
    jsx: (
      <MultiSelect defaultValue={['option-1']} inlineSize="200px">
        <MultiSelect.Option value="option-1">Option 1</MultiSelect.Option>
        <MultiSelect.Option value="option-2">Option 2</MultiSelect.Option>
        <MultiSelect.Option value="option-3">Option 3</MultiSelect.Option>
      </MultiSelect>
    ),
  },
  {
    description: 'Disabled MultiSelect.',
    jsx: (
      <MultiSelect defaultValue={['option-1']} inlineSize="200px" disabled>
        <MultiSelect.Option value="option-1">Option 1</MultiSelect.Option>
        <MultiSelect.Option value="option-2">Option 2</MultiSelect.Option>
        <MultiSelect.Option value="option-3">Option 3</MultiSelect.Option>
      </MultiSelect>
    ),
  },
]
