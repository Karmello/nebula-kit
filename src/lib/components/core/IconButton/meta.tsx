import { Activity } from 'lucide-react'

import { ComponentMeta } from 'client/definitions'
import { CONTROL_SIZES, DEFAULT_CONTROL_SIZE } from 'lib/definitions'

import { type IconButtonProps, ICON_BUTTON_TAGS } from './definitions'
import { IconButton } from './icon-button'
import ACTION_SURFACE_META from '../ActionSurface/meta'
import WITH_ICON_META from '../WithIcon/meta'

export default {
  IconButton: {
    overview: {
      bundle: 'core',
      title: 'Interactive icon-only control for compact actions and utility triggers.',
      description:
        'IconButton is a compact authored control built on top of ActionSurface, designed for icon-only interactions such as toolbar actions, close buttons, navigation controls and utility triggers. It provides consistent interaction behavior, visual states and loading handling while keeping the surface constrained and visually balanced around a single icon.',
      features: [
        'provides a compact icon-only interactive control',
        'built on top of ActionSurface interaction infrastructure',
        'supports loading state with centered loader overlay',
        'supports both predefined and custom icon content',
        'handles interactive states: hover, active, focus, disabled, loading',
        'supports ripple interaction feedback',
        'supports polymorphic rendering as button or anchor',
        'keeps interaction geometry consistent with the global control sizing system',
      ],
      composedOf: ['ActionSurface', 'WithIcon', 'Loader'],
      topLevelTags: ICON_BUTTON_TAGS,
    },
    props: {
      color: ACTION_SURFACE_META.ActionSurface.props.color,
      customSvgIcon: {
        ...WITH_ICON_META.WithIcon.props.customSvgIcon,
        description: 'Custom SVG icon rendered instead of iconName.',
      },
      disabled: ACTION_SURFACE_META.ActionSurface.props.disabled,
      elevated: ACTION_SURFACE_META.ActionSurface.props.elevated,
      iconAngle: WITH_ICON_META.WithIcon.props.iconAngle,
      iconName: WITH_ICON_META.WithIcon.props.iconName,
      intent: ACTION_SURFACE_META.ActionSurface.props.intent,
      interactive: ACTION_SURFACE_META.ActionSurface.props.interactive,
      loading: {
        options: ['boolean'],
        description: 'Activates the loading state, shows a spinner and prevents interaction.',
      },
      onClick: ACTION_SURFACE_META.ActionSurface.props.onClick,
      ripple: ACTION_SURFACE_META.ActionSurface.props.ripple,
      size: {
        options: CONTROL_SIZES,
        defaultValue: DEFAULT_CONTROL_SIZE,
        description: 'Controls the overall interaction geometry and icon proportions',
      },
      tag: {
        ...ACTION_SURFACE_META.ActionSurface.props.tag,
        options: ICON_BUTTON_TAGS,
      },
      tagAttrs: ACTION_SURFACE_META.ActionSurface.props.tagAttrs,
      tagRef: ACTION_SURFACE_META.ActionSurface.props.tagRef,
      variant: ACTION_SURFACE_META.ActionSurface.props.variant,
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
  } as ComponentMeta<IconButtonProps>,
}
