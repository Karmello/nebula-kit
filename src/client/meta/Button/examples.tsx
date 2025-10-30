import { ComponentMeta } from 'client/definitions'
import { Button, Flex } from 'lib/components'
import { ButtonProps, BUTTON_SIZES } from 'lib/components/controls/Button/definitions'

const BUTTON_EXAMPLES_META: ComponentMeta<ButtonProps>['examples'] = [
  {
    description: 'Default button has medium size, solid variant and tertiary intent.',
    jsx: <Button>Default button</Button>,
  },
  {
    description: 'Examples of different button sizes.',
    jsx: (
      <Flex alignItems="center" gap={10}>
        {BUTTON_SIZES.map(size => (
          <Button key={size} size={size}>
            {size}
          </Button>
        ))}
      </Flex>
    ),
  },
  {
    description: 'Button stretched to fill the full width of its container.',
    jsx: <Button fullWidth>Full width button</Button>,
  },
  {
    description: 'Large button with primary intent.',
    jsx: (
      <Button size="lg" intent="primary">
        Large button
      </Button>
    ),
  },
  {
    description: 'Outline variant with secondary intent.',
    jsx: (
      <Button variant="outline" intent="secondary">
        Outline button
      </Button>
    ),
  },
  {
    description: 'Ghost variant with danger intent.',
    jsx: (
      <Button variant="ghost" intent="danger">
        Ghost button
      </Button>
    ),
  },
  {
    description: 'Button with text and icon.',
    jsx: <Button iconName="search">Button with icon</Button>,
  },
  {
    description: 'Full width Button with an icon aligned to the right edge.',
    jsx: (
      <Button fullWidth iconName="search" iconPosition="right" justifyContent="space-between">
        Button with icon
      </Button>
    ),
  },
  {
    description: 'Icon button',
    jsx: <Button iconName="close" />,
  },
  {
    description: 'Selected button.',
    jsx: <Button selected>Selected</Button>,
  },
  {
    description: 'Disabled button.',
    jsx: <Button disabled>Disabled</Button>,
  },
]

export { BUTTON_EXAMPLES_META }
