import { ComponentMeta } from 'client/definitions'
import { Button, Flex } from 'lib/components'
import { ButtonOwnProps, ButtonSize } from 'lib/components/controls/Button/definitions'

export default [
  {
    description:
      'By default, Button renders in medium size with a solid variant and tertiary intent, providing a standard, baseline action control.',
    jsx: <Button>Default button</Button>,
  },
  {
    description: 'This shows how to render a button that combines text with an icon for clearer meaning.',
    jsx: <Button iconName="search">Button with icon</Button>,
  },
  {
    description: 'Large size with primary intent makes the button stand out as a key call to action.',
    jsx: (
      <Button size="lg" intent="primary">
        Large button
      </Button>
    ),
  },
  {
    description: 'Outline variant with secondary intent, suited for less prominent or supporting actions.',
    jsx: (
      <Button variant="outline" intent="secondary">
        Outline button
      </Button>
    ),
  },
  {
    description:
      'Ghost variant with danger intent, useful for destructive actions presented in a lighter, less dominant style.',
    jsx: (
      <Button variant="ghost" intent="danger">
        Ghost button
      </Button>
    ),
  },
  {
    description:
      'When rendered as an <a>, Button keeps the same appearance as a regular button - semantics change to navigation, but visuals stay consistent.',
    jsx: (
      <Button tag="a" tagAttrs={{ href: 'https://google.com', target: '_blank' }} intent="primary">
        Link button
      </Button>
    ),
  },
  {
    description: 'Different button sizes.',
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
] as ComponentMeta<ButtonOwnProps>['examples']
