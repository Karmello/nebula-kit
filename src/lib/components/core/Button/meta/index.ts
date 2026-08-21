import { BUTTON_TAGS, DEFAULT_TSHIRT_SIZE, TSHIRT_SIZES } from 'lib/constants'
import { ButtonProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../../Box/meta'
import { ICON_META } from '../../Icon/meta'
import { TEXT_META } from '../../Text/meta'
import {
  BUTTON_ALIGNS,
  BUTTON_ICON_PLACEMENTS,
  DEFAULT_BUTTON_ALIGN,
  DEFAULT_BUTTON_ICON_PLACEMENT,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_RIPPLE,
  DEFAULT_BUTTON_VARIANT,
} from '../constants'
import { BUTTON_CHANGELOG } from './changelog'
import { BUTTON_EXAMPLES } from './examples'

export const BUTTON_META = {
  Button: {
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
      bold: TEXT_META.Text.props.bold,
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
        description: 'Label rendered.',
      },
      color: BOX_META.Box.props.color,
      customSvgIcon: {
        ...ICON_META.Icon.props.children,
      },
      disabled: BOX_META.Box.props.disabled,
      elevated: BOX_META.Box.props.elevated,
      fullWidth: {
        options: ['boolean'],
        isResponsive: true,
        description: 'Expands the button to match the full width of its container.',
      },
      iconName: ICON_META.Icon.props.name,
      iconPlacement: {
        options: BUTTON_ICON_PLACEMENTS,
        defaultValue: DEFAULT_BUTTON_ICON_PLACEMENT,
        description: 'Icon placement relative to label.',
      },
      inlineSize: BOX_META.Box.props.inlineSize,
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_BUTTON_INTENT),
      },
      loading: {
        options: ['boolean'],
        description: 'Activates the loading state, shows a spinner and prevents interaction.',
      },
      maxInlineSize: BOX_META.Box.props.maxInlineSize,
      minInlineSize: BOX_META.Box.props.minInlineSize,
      onClick: {
        options: ['e => void'],
        description: 'Click event handler for the button element.',
      },
      ripple: {
        ...BOX_META.Box.props.ripple,
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
        ...BOX_META.Box.props.tag,
        options: BUTTON_TAGS,
        defaultValue: 'button',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      variant: {
        ...BOX_META.Box.props.variant,
        defaultValue: String(DEFAULT_BUTTON_VARIANT),
      },
    },
    examples: BUTTON_EXAMPLES,
    changelog: BUTTON_CHANGELOG,
  } satisfies ComponentMeta<ButtonProps>,
}
