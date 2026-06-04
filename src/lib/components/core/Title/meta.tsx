import { PROP_GROUPS } from 'lib/constants'
import { Title, TitleProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { FLEX_META } from '../Flex/meta'
import { ICON_META } from '../Icon/meta'
import { DEFAULT_TITLE_ICON_PLACEMENT, DEFAULT_TITLE_TYPOGRAPHY, TITLE_ICON_PLACEMENTS, TITLE_TYPOGRAPHY } from './constants'

export const TITLE_META = {
  Title: {
    overview: {
      bundle: 'core',
      title: 'Title text component with optional icon support.',
      description:
        'Title renders concise text with an optional icon, keeping icon size, spacing, color and intent aligned with the selected typography.',
      features: [
        'renders concise title text with an optional icon',
        'syncs icon size and spacing with typography',
        'supports left or right icon placement',
        'applies shared color and intent to text and icon',
        'allows custom content when children are not plain text',
      ],
      composedOf: ['Flex', 'Text', 'Icon'],
      topLevelTags: ['span'],
    },
    props: {
      color: FLEX_META.Flex.props.color,
      intent: FLEX_META.Flex.props.intent,
      typography: {
        group: PROP_GROUPS.TYPOGRAPHY,
        options: TITLE_TYPOGRAPHY,
        defaultValue: DEFAULT_TITLE_TYPOGRAPHY,
        description: 'Typography style used for plain text children and for deriving the icon size and spacing.',
      },
      iconName: ICON_META.Icon.props.name,
      iconPlacement: {
        group: PROP_GROUPS.ICON,
        options: TITLE_ICON_PLACEMENTS as unknown as string[],
        defaultValue: DEFAULT_TITLE_ICON_PLACEMENT,
        isRequired: false,
        isResponsive: false,
        description: 'Icon placement relative to children.',
      },
      customSvgIcon: {
        ...ICON_META.Icon.props.children,
        group: PROP_GROUPS.ICON,
      },
      children: {
        ...FLEX_META.Flex.props.children,
        isRequired: true,
        description:
          'Content rendered as the title. Plain string or number children are wrapped in Text using the selected typography. Custom React nodes are rendered directly.',
      },
      tagAttrs: FLEX_META.Flex.props.tagAttrs,
      tagRef: FLEX_META.Flex.props.tagRef,
    },
    examples: [
      {
        description: 'Search icon aligned with the provided text content.',
        jsx: <Title iconName="search">Text content</Title>,
      },
      {
        description: 'Icon on the right.',
        jsx: (
          <Title iconName="search" iconPlacement="right">
            Text content
          </Title>
        ),
      },
    ],
    changelog: {
      '0.11.0': ['renamed `WithIcon` to `Title`'],
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<TitleProps>,
}
