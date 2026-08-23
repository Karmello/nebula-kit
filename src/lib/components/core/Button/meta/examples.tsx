import { NEB_LENGTH, TSHIRT_SIZES } from 'lib/constants'
import { Box, Button } from 'lib/index.core'
import { type Example } from 'client/definitions'

export const BUTTON_EXAMPLES: Example[] = [
  {
    description: 'Default button has medium size, solid variant and tertiary intent.',
    jsx: <Button>Default button</Button>,
  },
  {
    description: 'Examples of different button scales.',
    jsx: (
      <Box display="flex" flexWrap="wrap" alignItems="center" gap={NEB_LENGTH.px_008}>
        {TSHIRT_SIZES.map(size => (
          <Button key={size} scale={size} iconName="tree-pine">
            {size.toUpperCase()} scale
          </Button>
        ))}
      </Box>
    ),
  },
  {
    description: 'Button stretched to fill the full width of its container.',
    jsx: <Button fullWidth>Full width button</Button>,
  },
  {
    description: 'Button with text and icon.',
    jsx: <Button iconName="search">Button with icon</Button>,
  },
  {
    description: 'Full width button with an icon aligned to the right edge.',
    jsx: (
      <Button fullWidth iconName="search" iconPlacement="right" align="split">
        Button with icon
      </Button>
    ),
  },
  {
    description: 'Button with bolded text.',
    jsx: <Button bold>Bold</Button>,
  },
  {
    description: 'Disabled button.',
    jsx: <Button disabled>Disabled</Button>,
  },
  {
    description: 'Button in loading state.',
    jsx: <Button loading>Loading</Button>,
  },
]
