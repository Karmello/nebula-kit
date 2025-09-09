import { PropCategory } from 'client/definitions'
import { Button, BUTTON_INHERITED_PROPS, ButtonOwnProps } from 'lib/components'
import { ComponentMeta, ButtonSize, DEFAULT_BUTTON_SIZE } from 'lib/definitions'

const BUTTON_META: ComponentMeta<ButtonOwnProps> = {
  overview: {
    name: 'Button',
    description:
      "Button is the primary interactive control for triggering actions in the interface. It wraps Nebula-kit's surface and text systems to provide a consistent, accessible entry point for user interaction.",
    responsibilities: [
      'provide a consistent, accessible trigger for user actions',
      'handle interactivity states such as hover, focus, active, and disabled',
      'support optional icon and text composition for clarity of meaning',
    ],
    characteristics: ['renders as a <button> element', 'requires children'],
    defaultBehavior: ['medium size', 'solid variant', 'tertiary intent'],
    useCases: ['applied wherever a clear, consistent action trigger is needed in the interface'],
    inheritedProps: BUTTON_INHERITED_PROPS,
  },
  props: [
    {
      category: PropCategory.appearance,
      name: 'size',
      options: Object.values(ButtonSize),
      defaultValue: DEFAULT_BUTTON_SIZE,
      isRequired: false,
      isResponsive: false,
      description:
        "Controls the button's overall proportions - adjusting blockSize, horizontal padding, and fontSize to keep content balanced at each size.",
    },
  ],
  examples: [
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
  ],
}

export default BUTTON_META
