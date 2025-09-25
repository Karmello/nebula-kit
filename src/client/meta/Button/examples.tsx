import { ComponentMeta } from 'client/definitions'
import { Button, Flex } from 'lib/components'
import { ButtonProps, ButtonSize } from 'lib/components/controls/Button/definitions'

const BUTTON_EXAMPLES_META: ComponentMeta<ButtonProps>['examples'] = [
  {
    description:
      'Renders in medium size with a solid variant and tertiary intent by default, providing a baseline action control.',
    jsx: <Button>Default button</Button>,
  },
  {
    description: 'Examples of different button sizes.',
    jsx: (
      <Flex alignItems="center" gap={5}>
        {ButtonSize.map(size => (
          <Button key={size} size={size}>
            {size}
          </Button>
        ))}
      </Flex>
    ),
  },
  {
    description: 'Large size with primary intent highlights the button as a key call to action.',
    jsx: (
      <Button size="lg" intent="primary">
        Large button
      </Button>
    ),
  },
  {
    description: 'Outline variant with secondary intent, suited for supporting or less prominent actions.',
    jsx: (
      <Button variant="outline" intent="secondary">
        Outline button
      </Button>
    ),
  },
  {
    description:
      'Ghost variant with danger intent, used for destructive actions in a lighter, less dominant style.',
    jsx: (
      <Button variant="ghost" intent="danger">
        Ghost button
      </Button>
    ),
  },
  {
    description:
      'Button rendered as a link, using the anchor tag to navigate to an external page while keeping button styling and interaction states.',
    jsx: (
      <Button tag="a" tagAttrs={{ href: 'https://google.com', target: '_blank' }} intent="primary">
        Link button
      </Button>
    ),
  },
  {
    description: 'Button with text and icon for clearer meaning.',
    jsx: <Button iconName="search">Button with icon</Button>,
  },
]

export { BUTTON_EXAMPLES_META }
