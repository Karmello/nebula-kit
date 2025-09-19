import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_WITH_ICON_ICON_POSITION,
  IconPosition,
  WITH_ICON_INHERITED_PROPS,
  WithIcon,
  WithIconOwnProps,
} from 'lib/components'

const WITH_ICON_META: ComponentMeta<WithIconOwnProps> = {
  overview: {
    description: 'Utility wrapper that aligns an icon alongside its children.',
    role: ['insert an icon', 'render children exactly as passed'],
    behavior: [
      'wraps the icon and children in a <span> element',
      'iconName is required to render an icon',
      'if no children are provided, only the icon is rendered',
    ],
    byDefault: ['iconPosition defaults to left'],
    examplesOfUse: [
      'add an icon to text or inline content',
      'compose higher-level components that support icons',
    ],
    composedOf: WITH_ICON_INHERITED_PROPS,
    rendersAs: ['span'],
  },
  ownProps: [
    {
      name: 'iconPosition',
      options: IconPosition as unknown as string[],
      defaultValue: DEFAULT_WITH_ICON_ICON_POSITION,
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
}

export default {
  WithIcon: WITH_ICON_META,
}
