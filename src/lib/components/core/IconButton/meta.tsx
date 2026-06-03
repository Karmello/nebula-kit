import { Activity } from 'lucide-react'

import { CONTROL_SIZES, DEFAULT_CONTROL_SIZE, ICON_BUTTON_TAGS } from 'lib/constants'
import { IconButton, IconButtonProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import { WITH_ICON_META } from '../WithIcon/meta'

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
      composedOf: ['Box', 'WithIcon', 'Loader'],
      topLevelTags: ICON_BUTTON_TAGS,
    },
    props: {
      color: BOX_META.Box.props.color,
      customSvgIcon: {
        ...WITH_ICON_META.WithIcon.props.customSvgIcon,
        description: 'Custom SVG icon rendered instead of iconName.',
      },
      disabled: BOX_META.Box.props.disabled,
      elevated: BOX_META.Box.props.elevated,
      iconAngle: WITH_ICON_META.WithIcon.props.iconAngle,
      iconName: WITH_ICON_META.WithIcon.props.iconName,
      intent: BOX_META.Box.props.intent,
      loading: {
        options: ['boolean'],
        description: 'Activates the loading state, shows a spinner and prevents interaction.',
      },
      onClick: {
        options: ['e => void'],
        description: 'Click event handler for the element.',
      },
      ripple: BOX_META.Box.props.ripple,
      size: {
        options: CONTROL_SIZES,
        defaultValue: DEFAULT_CONTROL_SIZE,
        description: 'Controls the overall interaction geometry and icon proportions',
      },
      tag: {
        ...BOX_META.Box.props.tag,
        options: ICON_BUTTON_TAGS,
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      variant: BOX_META.Box.props.variant,
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
        jsx: <IconButton customSvgIcon={<Activity size="18px" />} />,
        code: `import { Activity } from 'lucide-react'

<IconButton customSvgIcon={<Activity size="18px" />} />`,
      },
    ],
    changelog: {
      '0.11.0': ['released'],
    },
  } satisfies ComponentMeta<IconButtonProps>,
}
