import { ComponentMeta } from 'client/definitions'
import { WITH_ICON_INHERITED_PROPS, WithIcon, WithIconOwnProps } from 'lib/components'
import { IconPosition, WITH_ICON_DEFAULT_ICON_POSITION } from 'lib/definitions'

export default {
  overview: {
    name: 'WithIcon',
    description: 'Utility wrapper that aligns an icon alongside its children.',
    responsibilities: ['insert an icon', 'render children exactly as passed'],
    characteristics: [
      'wraps the icon and children in a <span> element',
      'iconName is required to render an icon',
      'if no children are provided, only the icon is rendered',
    ],
    defaultBehavior: ['iconPosition defaults to left'],
    useCases: ['add an icon to text or inline content', 'compose higher-level components that support icons'],
    inheritedProps: WITH_ICON_INHERITED_PROPS,
  },
  props: [
    {
      name: 'iconPosition',
      options: IconPosition as unknown as string[],
      defaultValue: WITH_ICON_DEFAULT_ICON_POSITION,
      isRequired: false,
      isResponsive: false,
      description: 'Controls how the icon is aligned relative to the children.',
    },
  ],
  examples: [
    {
      description: 'Renders only the search icon with no accompanying content.',
      jsx: <WithIcon iconName="search" />,
    },
    {
      description: 'Renders the search icon aligned with the provided text content.',
      jsx: <WithIcon iconName="search">Text content</WithIcon>,
    },
    {
      description: 'Renders the search icon aligned to the right of the provided text content.',
      jsx: (
        <WithIcon iconName="search" iconPosition="right">
          Text content
        </WithIcon>
      ),
    },
  ],
} as ComponentMeta<WithIconOwnProps>
