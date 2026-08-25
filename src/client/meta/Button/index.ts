import {
  BUTTON_ALIGNS,
  BUTTON_ICON_PLACEMENTS,
  BUTTON_TAGS,
  DEFAULT_BUTTON_ALIGN,
  DEFAULT_BUTTON_ICON_PLACEMENT,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_RIPPLE,
  DEFAULT_BUTTON_VARIANT,
} from 'lib/components/core/Button/constants'
import { DEFAULT_TSHIRT_SIZE, TSHIRT_SIZES } from 'lib/constants'
import { ButtonProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { ICON_META } from '../Icon'
import { TEXT_META } from '../Text'
import { BUTTON_CHANGELOG } from './changelog'
import { BUTTON_EXAMPLES } from './examples'

export const BUTTON_META = {
  overview: {
    bundle: 'core',
    title:
      'Interactive control for triggering actions with consistent semantics, layout and visual states.',
    features: [
      'provides a consistent, accessible trigger for user actions',
      'handles interactive states: hover, active, focus, disabled, loading',
      'supports first-class icon composition, including custom SVG icons',
      'supports full-width layout to span the entire container',
    ],
    composedOf: ['Box', 'Text', 'Icon', 'Loader'],
    exposedTags: BUTTON_TAGS,
  },
  props: {
    align: {
      options: BUTTON_ALIGNS,
      defaultValue: String(DEFAULT_BUTTON_ALIGN),
      isResponsive: true,
      description: 'Controls how inner content is arranged within the container.',
    },
    bold: TEXT_META.props.bold,
    children: {
      ...BOX_META.props.children,
      isRequired: true,
      description: 'Label rendered.',
    },
    color: BOX_META.props.color,
    customSvgIcon: {
      ...ICON_META.props.children,
    },
    disabled: BOX_META.props.disabled,
    elevated: BOX_META.props.elevated,
    fullWidth: {
      options: ['boolean'],
      isResponsive: true,
      description: 'Expands the button to match the full width of its container.',
    },
    iconName: ICON_META.props.name,
    iconPlacement: {
      options: BUTTON_ICON_PLACEMENTS,
      defaultValue: DEFAULT_BUTTON_ICON_PLACEMENT,
      description: 'Icon placement relative to label.',
    },
    inlineSize: BOX_META.props.inlineSize,
    intent: {
      ...BOX_META.props.intent,
      defaultValue: String(DEFAULT_BUTTON_INTENT),
    },
    loading: {
      options: ['boolean'],
      description: 'Activates the loading state, shows a spinner and prevents interaction.',
    },
    maxInlineSize: BOX_META.props.maxInlineSize,
    minInlineSize: BOX_META.props.minInlineSize,
    onClick: {
      options: ['e => void'],
      description: 'Click event handler for the button element.',
    },
    ripple: {
      ...BOX_META.props.ripple,
      defaultValue: String(DEFAULT_BUTTON_RIPPLE),
    },
    scale: {
      options: TSHIRT_SIZES,
      defaultValue: DEFAULT_TSHIRT_SIZE,
      description:
        'Controls overall proportions adjusting blockSize, horizontal padding and fontSize to keep content balanced.',
    },
    selected: {
      options: ['boolean'],
      description:
        'Applies the selected visual behavior to the component, keeping it in a persistent highlighted state.',
    },
    tag: {
      ...BOX_META.props.tag,
      options: BUTTON_TAGS,
      defaultValue: 'button',
    },
    tagAttrs: BOX_META.props.tagAttrs,
    tagRef: BOX_META.props.tagRef,
    variant: {
      ...BOX_META.props.variant,
      defaultValue: String(DEFAULT_BUTTON_VARIANT),
    },
  },
  examples: BUTTON_EXAMPLES,
  changelog: BUTTON_CHANGELOG,
} satisfies ComponentMeta<ButtonProps>
