import { ICON_BUTTON_TAGS, TSHIRT_SIZES } from 'lib/constants'
import { IconButtonProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../../Box/meta'
import { ICON_META } from '../../Icon/meta'
import {
  DEFAULT_ICON_BUTTON_INTENT,
  DEFAULT_ICON_BUTTON_RIPPLE,
  DEFAULT_ICON_BUTTON_SCALE,
  DEFAULT_ICON_BUTTON_VARIANT,
} from '../constants'
import { ICON_BUTTON_CHANGELOG } from './changelog'
import { ICON_BUTTON_EXAMPLES } from './examples'

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
      exposedTags: ICON_BUTTON_TAGS,
    },
    props: {
      color: BOX_META.Box.props.color,
      customSvgIcon: {
        ...ICON_META.Icon.props.children,
        description: 'Custom SVG icon rendered instead of iconName.',
      },
      disabled: BOX_META.Box.props.disabled,
      elevated: BOX_META.Box.props.elevated,
      iconName: ICON_META.Icon.props.name,
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_ICON_BUTTON_INTENT),
      },
      loading: {
        options: ['boolean'],
        description: 'Activates the loading state, shows a spinner and prevents interaction.',
      },
      onClick: {
        options: ['e => void'],
        description: 'Click event handler for the element.',
      },
      ripple: {
        ...BOX_META.Box.props.ripple,
        defaultValue: String(DEFAULT_ICON_BUTTON_RIPPLE),
      },
      scale: {
        options: TSHIRT_SIZES,
        defaultValue: DEFAULT_ICON_BUTTON_SCALE,
        description: 'Controls the overall interaction geometry and icon proportions',
      },
      tag: {
        ...BOX_META.Box.props.tag,
        options: ICON_BUTTON_TAGS,
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      variant: {
        ...BOX_META.Box.props.variant,
        defaultValue: String(DEFAULT_ICON_BUTTON_VARIANT),
      },
    },
    examples: ICON_BUTTON_EXAMPLES,
    changelog: ICON_BUTTON_CHANGELOG,
  } satisfies ComponentMeta<IconButtonProps>,
}
