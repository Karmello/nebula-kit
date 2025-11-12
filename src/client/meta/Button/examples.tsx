import { ComponentMeta } from 'client/definitions'
import { Button, Flex } from 'lib/components'
import { BOX_VARIANTS } from 'lib/components/base/Box/definitions'
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
    description: 'Examples of different button variants.',
    jsx: (
      <Flex alignItems="center" gap={10}>
        {BOX_VARIANTS.map(variant => (
          <Button key={variant} variant={variant} intent="primary">
            {variant}
          </Button>
        ))}
      </Flex>
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
    description: 'Button with bolded text.',
    jsx: <Button bold>Bold</Button>,
  },
  {
    description: 'Disabled button.',
    jsx: <Button disabled>Disabled</Button>,
  },
]

export { BUTTON_EXAMPLES_META }
