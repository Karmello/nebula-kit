import { Activity } from 'lucide-react'

import { ICON_BUTTON_TAGS, PROP_GROUPS, TSHIRT_SIZES } from 'lib/constants'
import { IconButton, IconButtonProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import { ICON_META } from '../Icon/meta'
import {
  DEFAULT_ICON_BUTTON_INTENT,
  DEFAULT_ICON_BUTTON_RIPPLE,
  DEFAULT_ICON_BUTTON_SCALE,
  DEFAULT_ICON_BUTTON_VARIANT,
} from './constants'

export const ICON_BUTTON_META = {
  IconButton: {
    overview: {
      bundle: 'core',
      title: 'Interactive icon-only control for compact actions and utility triggers.',
      description:
        'IconButton is a compact authored control built on top of Box, designed for icon-only interactions such as toolbar actions, close buttons, navigation controls and utility triggers. It provides consistent interaction behavior, visual states and loading handling while keeping the surface constrained and visually balanced around a single icon.',
      features: [
        'provides a compact icon-only interactive control',
        'supports loading state with centered loader overlay',
        'supports both predefined and custom icon content',
        'handles interactive states: hover, active, focus, disabled, loading',
        'supports ripple interaction feedback',
        'supports polymorphic rendering as button or anchor',
        'keeps interaction geometry consistent with the global control sizing system',
      ],
      composedOf: ['Flex', 'Icon', 'Loader'],
      topLevelTags: ICON_BUTTON_TAGS,
    },
    props: {
      elevated: BOX_META.Box.props.elevated,
      color: BOX_META.Box.props.color,
      variant: {
        ...BOX_META.Box.props.variant,
        defaultValue: String(DEFAULT_ICON_BUTTON_VARIANT),
      },
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_ICON_BUTTON_INTENT),
      },
      loading: {
        group: PROP_GROUPS.INTERACTION,
        options: ['boolean'],
        description: 'Activates the loading state, shows a spinner and prevents interaction.',
      },
      disabled: BOX_META.Box.props.disabled,
      ripple: {
        ...BOX_META.Box.props.ripple,
        defaultValue: String(DEFAULT_ICON_BUTTON_RIPPLE),
      },
      scale: {
        group: PROP_GROUPS.SIZE,
        options: TSHIRT_SIZES,
        defaultValue: DEFAULT_ICON_BUTTON_SCALE,
        description: 'Controls the overall interaction geometry and icon proportions',
      },
      iconName: ICON_META.Icon.props.name,
      customSvgIcon: {
        ...ICON_META.Icon.props.children,
        group: PROP_GROUPS.ICON,
        description: 'Custom SVG icon rendered instead of iconName.',
      },
      tag: {
        ...BOX_META.Box.props.tag,
        options: ICON_BUTTON_TAGS,
      },
      tagRef: BOX_META.Box.props.tagRef,
      tagAttrs: BOX_META.Box.props.tagAttrs,
      onClick: {
        group: PROP_GROUPS.ROOT,
        options: ['e => void'],
        description: 'Click event handler for the element.',
      },
    },
    examples: [
      {
        description: 'Send icon.',
        jsx: <IconButton iconName="send" />,
      },
      {
        description: 'Disabled.',
        jsx: <IconButton iconName="send" disabled />,
      },
      {
        description: 'Loading.',
        jsx: <IconButton iconName="send" loading />,
      },
      {
        description: 'Custon SVG icon.',
        jsx: <IconButton customSvgIcon={<Activity size="17px" />} />,
        code: `import { Activity } from 'lucide-react'

<IconButton customSvgIcon={<Activity size="17px" />} />`,
      },
    ],
    changelog: {
      '0.11.0': ['released'],
    },
  } satisfies ComponentMeta<IconButtonProps>,
}
