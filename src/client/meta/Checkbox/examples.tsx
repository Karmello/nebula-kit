import { ComponentMeta } from 'client/definitions'
import { Checkbox, CheckboxProps, Flex } from 'lib/components'

const CHECKBOX_EXAMPLES_META: ComponentMeta<CheckboxProps>['examples'] = [
  {
    code: '<Checkbox checked={checked} />',
    skip: true,
  },
  {
    description: 'Different checkbox sizes in the outline variant.',
    jsx: (
      <Flex gap="10px" alignItems="center">
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
      <Flex gap="10px" alignItems="center">
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
      <Flex gap="10px" alignItems="center">
        <Checkbox size="xs" variant="solid" />
        <Checkbox size="sm" variant="solid" />
        <Checkbox size="md" variant="solid" />
        <Checkbox size="lg" variant="solid" />
      </Flex>
    ),
  },
]

export { CHECKBOX_EXAMPLES_META }
