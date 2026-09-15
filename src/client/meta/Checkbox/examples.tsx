import { Box, Checkbox } from 'lib/index.core'
import { type DocExample } from 'client/definitions'

export const CHECKBOX_EXAMPLES: DocExample[] = [
  {
    code: '<Checkbox checked={checked} />',
    skip: true,
  },
  {
    description: 'Different checkbox sizes in the outline variant.',
    jsx: (
      <Box display="flex" gap="8px" alignItems="center">
        <Checkbox scale="xs" variant="outline" />
        <Checkbox scale="sm" variant="outline" />
        <Checkbox scale="md" variant="outline" />
        <Checkbox scale="lg" variant="outline" />
        <Checkbox scale="xl" variant="outline" />
      </Box>
    ),
  },
  {
    description: 'Different checkbox sizes in the soft-outline variant.',
    jsx: (
      <Box display="flex" gap="8px" alignItems="center">
        <Checkbox scale="xs" variant="soft-outline" />
        <Checkbox scale="sm" variant="soft-outline" />
        <Checkbox scale="md" variant="soft-outline" />
        <Checkbox scale="lg" variant="soft-outline" />
        <Checkbox scale="xl" variant="soft-outline" />
      </Box>
    ),
  },
  {
    description: 'Different checkbox sizes in the solid variant.',
    jsx: (
      <Box display="flex" gap="8px" alignItems="center">
        <Checkbox scale="xs" variant="solid" />
        <Checkbox scale="sm" variant="solid" />
        <Checkbox scale="md" variant="solid" />
        <Checkbox scale="lg" variant="solid" />
        <Checkbox scale="xl" variant="solid" />
      </Box>
    ),
  },
  {
    description: 'Disabled selected checkboxes.',
    jsx: (
      <Box display="flex" gap="8px" alignItems="center">
        <Checkbox scale="xs" variant="solid" disabled defaultChecked />
        <Checkbox scale="sm" variant="solid" disabled defaultChecked />
        <Checkbox scale="md" variant="solid" disabled defaultChecked />
        <Checkbox scale="lg" variant="solid" disabled defaultChecked />
        <Checkbox scale="xl" variant="solid" disabled defaultChecked />
      </Box>
    ),
  },
]
