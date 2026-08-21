import { TitleProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../../Box/meta'
import { FLEX_META } from '../../Flex/meta'
import { ICON_META } from '../../Icon/meta'
import {
  DEFAULT_TITLE_ICON_PLACEMENT,
  DEFAULT_TITLE_TYPOGRAPHY,
  TITLE_ICON_PLACEMENTS,
  TITLE_TYPOGRAPHY,
} from '../constants'
import { TITLE_CHANGELOG } from './changelog'
import { TITLE_EXAMPLES } from './examples'

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
      exposedTags: ['span'],
    },
    props: {
      children: {
        ...FLEX_META.Flex.props.children,
        isRequired: true,
        description:
          'Content rendered as the title. Plain string or number children are wrapped in Text using the selected typography. Custom React nodes are rendered directly.',
      },
      color: BOX_META.Box.props.color,
      customSvgIcon: {
        ...ICON_META.Icon.props.children,
      },
      iconName: ICON_META.Icon.props.name,
      iconPlacement: {
        options: TITLE_ICON_PLACEMENTS as unknown as string[],
        defaultValue: DEFAULT_TITLE_ICON_PLACEMENT,
        isRequired: false,
        isResponsive: false,
        description: 'Icon placement relative to children.',
      },
      intent: BOX_META.Box.props.intent,
      tagAttrs: FLEX_META.Flex.props.tagAttrs,
      tagRef: FLEX_META.Flex.props.tagRef,
      typography: {
        options: TITLE_TYPOGRAPHY,
        defaultValue: DEFAULT_TITLE_TYPOGRAPHY,
        description:
          'Typography style used for plain text children and for deriving the icon size and spacing.',
      },
    },
    examples: TITLE_EXAMPLES,
    changelog: TITLE_CHANGELOG,
  } satisfies ComponentMeta<TitleProps>,
}
