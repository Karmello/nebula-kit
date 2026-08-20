import { Checkbox, Flex } from 'lib/index.core'
import { type Example } from 'client/definitions'

export const CHECKBOX_EXAMPLES: Example[] = [
  {
    code: '<Checkbox checked={checked} />',
    skip: true,
  },
  {
    description: 'Different checkbox sizes in the outline variant.',
    jsx: (
      <Flex gap="8px" alignItems="center">
        <Checkbox size="xs" variant="outline" />
        <Checkbox size="sm" variant="outline" />
        <Checkbox size="md" variant="outline" />
        <Checkbox size="lg" variant="outline" />
      </Flex>
    ),
  },
  {
    description: 'Different checkbox sizes in the soft-outline variant.',
    jsx: (
      <Flex gap="8px" alignItems="center">
        <Checkbox size="xs" variant="soft-outline" />
        <Checkbox size="sm" variant="soft-outline" />
        <Checkbox size="md" variant="soft-outline" />
        <Checkbox size="lg" variant="soft-outline" />
      </Flex>
    ),
  },
  {
    description: 'Different checkbox sizes in the solid variant.',
    jsx: (
      <Flex gap="8px" alignItems="center">
        <Checkbox size="xs" variant="solid" />
        <Checkbox size="sm" variant="solid" />
        <Checkbox size="md" variant="solid" />
        <Checkbox size="lg" variant="solid" />
      </Flex>
    ),
  },
  {
    description: 'Disabled selected checkboxes.',
    jsx: (
      <Flex gap="8px" alignItems="center">
        <Checkbox size="xs" variant="solid" disabled defaultChecked />
        <Checkbox size="sm" variant="solid" disabled defaultChecked />
        <Checkbox size="md" variant="solid" disabled defaultChecked />
        <Checkbox size="lg" variant="solid" disabled defaultChecked />
      </Flex>
    ),
  },
]
