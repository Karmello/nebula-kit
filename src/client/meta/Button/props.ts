import {
  BOX_COLORS,
  BOX_INTENTS,
  BOX_SURFACE_DEPTHS,
  BOX_THEMES,
  BOX_VARIANTS,
} from 'lib/components/core/Box/constants'
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
import type { DocProp } from 'client/definitions'

export const BUTTON_PROPS: Record<keyof ButtonProps, DocProp> = {
  align: {
    options: BUTTON_ALIGNS,
    defaultValue: String(DEFAULT_BUTTON_ALIGN),
    isResponsive: true,
    description: 'Controls how inner content is arranged within the container.',
  },
  bold: {
    options: ['boolean'],
    description: 'Toggles bold styling.',
  },
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Label rendered.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
  },
  customSvgIcon: {
    options: ['ReactNode'],
    description: 'Custom SVG icon rendered when not using name prop.',
  },
  disabled: {
    options: ['boolean'],
    description: 'Disables the component and its interactions.',
  },
  fullWidth: {
    options: ['boolean'],
    isResponsive: true,
    description: 'Expands the button to match the full width of its container.',
  },
  iconName: {
    options: ['IconName'],
    isResponsive: true,
    description: 'Name of the icon to render.',
  },
  iconPlacement: {
    options: BUTTON_ICON_PLACEMENTS,
    defaultValue: DEFAULT_BUTTON_ICON_PLACEMENT,
    description: 'Icon placement relative to label.',
  },
  inlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical width.',
    link: true,
  },
  intent: {
    options: BOX_INTENTS,
    description: "Color tone applied to the component's main color.",
    defaultValue: String(DEFAULT_BUTTON_INTENT),
  },
  loading: {
    options: ['boolean'],
    description: 'Activates the loading state, shows a spinner and prevents interaction.',
  },
  maxInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Maximum logical width.',
    link: true,
  },
  minInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Minimum logical width.',
    link: true,
  },
  onClick: {
    options: ['e => void'],
    description: 'Click event handler for the button element.',
  },
  ripple: {
    options: ['boolean'],
    description: 'Toggles the ripple effect on pointer interaction.',
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
  surfaceDepth: {
    options: BOX_SURFACE_DEPTHS,
    description:
      "Selects which depth tier the component's surface color is drawn from — base, raised or lowered — each with its own per-intent lightness and interaction states.",
  },
  tag: {
    options: BUTTON_TAGS,
    defaultValue: 'button',
    description: 'The HTML tag to be rendered as the container.',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
  theme: {
    options: BOX_THEMES,
    isResponsive: true,
    description:
      'Sets a local theme boundary for the component and its drawable descendants. Supports explicit themes, the global application theme or the opposite of the global application theme.',
  },
  variant: {
    options: BOX_VARIANTS,
    description: 'Visual style variant.',
    defaultValue: String(DEFAULT_BUTTON_VARIANT),
  },
}
