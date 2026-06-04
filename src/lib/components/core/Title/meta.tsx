import { Title } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { Box } from '../Box'
import { BOX_META } from '../Box/meta'
import { FLEX_META } from '../Flex/meta'
import { ICON_META } from '../Icon/meta'
import { ROTATE_META } from '../Rotate/meta'
import { TEXT_META } from '../Text/meta'
import {
  DEFAULT_TITLE_GAP,
  DEFAULT_TITLE_ICON_PLACEMENT,
  TITLE_ICON_PLACEMENTS,
  TITLE_JUSTIFY_CONTENT,
  TitleProps,
} from './definitions'

export const TITLE_META = {
  Title: {
    overview: {
      bundle: 'core',
      title: 'Layout component that aligns an icon with accompanying content.',
      features: [
        'renders an icon next to the children passed',
        'controls layout of an icon and children',
        'handles icon rotation if required',
      ],
      composedOf: ['Box', 'Flex', 'Rotate', 'Icon'],
      topLevelTags: ['span'],
    },
    props: {
      children: BOX_META.Box.props.children,
      customSvgIcon: ICON_META.Icon.props.children,
      gap: {
        ...FLEX_META.Flex.props.gap,
        defaultValue: String(DEFAULT_TITLE_GAP),
        description: 'Spacing between icon and content.',
      },
      iconAngle: {
        ...ROTATE_META.Rotate.props.angle,
        isRequired: false,
        description: 'Defines the rotation angle of the icon, animating when the value changes.',
      },
      iconColor: ICON_META.Icon.props.color,
      iconIntent: ICON_META.Icon.props.intent,
      iconName: ICON_META.Icon.props.name,
      iconPlacement: {
        options: TITLE_ICON_PLACEMENTS as unknown as string[],
        defaultValue: DEFAULT_TITLE_ICON_PLACEMENT,
        isRequired: false,
        isResponsive: false,
        description: 'Icon placement relative to children.',
      },
      iconSize: ICON_META.Icon.props.size,
      iconTypography: TEXT_META.Text.props.typography,
      inlineSize: BOX_META.Box.props.inlineSize,
      justifyContent: {
        ...FLEX_META.Flex.props.justifyContent,
        options: TITLE_JUSTIFY_CONTENT,
        description: 'Distributes an icon and children along the main axis.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: [
      {
        description: 'Search icon aligned with the provided text content.',
        jsx: (
          <Title iconName="search">
            <Box tag="span">Text content</Box>
          </Title>
        ),
      },
      {
        description: 'Icon on the right.',
        jsx: (
          <Title iconName="search" iconPlacement="right">
            <Box tag="span">Text content</Box>
          </Title>
        ),
      },
      {
        description: 'Icon aligned to the right edge of the container.',
        jsx: (
          <Title iconName="search" iconPlacement="right" justifyContent="space-between">
            <Box tag="span">Text content</Box>
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
