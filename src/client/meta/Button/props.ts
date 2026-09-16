import { BOX_COLORS, BOX_INTENTS, BOX_SURFACE_DEPTHS } from 'lib/components/core/Box/constants'
import {
  BUTTON_ALIGNS,
  BUTTON_ICON_PLACEMENTS,
  BUTTON_TAGS,
  BUTTON_VARIANTS,
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
  // base
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Label rendered.',
    group: 'base',
  },
  tag: {
    options: BUTTON_TAGS,
    defaultValue: 'button',
    description: 'The HTML tag to be rendered as the container.',
    group: 'base',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
    group: 'base',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
    group: 'base',
  },
  // surface
  variant: {
    options: BUTTON_VARIANTS,
    description: 'Visual style variant.',
    defaultValue: String(DEFAULT_BUTTON_VARIANT),
    group: 'surface',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
    group: 'surface',
  },
  intent: {
    options: BOX_INTENTS,
    description: "Color tone applied to the component's main color.",
    defaultValue: String(DEFAULT_BUTTON_INTENT),
    group: 'surface',
  },
  surfaceDepth: {
    options: BOX_SURFACE_DEPTHS,
    description:
      "Selects which depth tier the component's surface color is drawn from - base or raised - each with its own per-intent lightness and interaction states.",
    group: 'surface',
  },
  // interaction
  disabled: {
    options: ['boolean'],
    description: 'Disables the component and its interactions.',
    group: 'interaction',
  },
  ripple: {
    options: ['boolean'],
    description: 'Toggles the ripple effect on pointer interaction.',
    defaultValue: String(DEFAULT_BUTTON_RIPPLE),
    group: 'interaction',
  },
  selected: {
    options: ['boolean'],
    description:
      'Applies the selected visual behavior to the component, keeping it in a persistent highlighted state.',
    group: 'interaction',
  },
  loading: {
    options: ['boolean'],
    description: 'Activates the loading state, shows a spinner and prevents interaction.',
    group: 'interaction',
  },
  onClick: {
    options: ['e => void'],
    description: 'Click event handler for the button element.',
    group: 'interaction',
  },
  // size
  scale: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_TSHIRT_SIZE,
    description:
      'Controls overall proportions adjusting blockSize, horizontal padding and fontSize to keep content balanced.',
    group: 'size',
  },
  fullWidth: {
    options: ['boolean'],
    isResponsive: true,
    description: 'Expands the button to match the full width of its container.',
    group: 'size',
  },
  inlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical width.',
    link: true,
    group: 'size',
  },
  minInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Minimum logical width.',
    link: true,
    group: 'size',
  },
  maxInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Maximum logical width.',
    link: true,
    group: 'size',
  },
  // layout
  align: {
    options: BUTTON_ALIGNS,
    defaultValue: String(DEFAULT_BUTTON_ALIGN),
    isResponsive: true,
    description: 'Controls how inner content is arranged within the container.',
    group: 'layout',
  },
  // icon
  iconName: {
    options: ['IconName'],
    description: 'Name of the icon to render.',
    group: 'icon',
  },
  iconPlacement: {
    options: BUTTON_ICON_PLACEMENTS,
    defaultValue: DEFAULT_BUTTON_ICON_PLACEMENT,
    description: 'Icon placement relative to label.',
    group: 'icon',
  },
  customSvgIcon: {
    options: ['ReactNode'],
    description: 'Custom SVG icon rendered when not using name prop.',
    group: 'icon',
  },
  // formatting
  bold: {
    options: ['boolean'],
    description: 'Toggles bold styling.',
    group: 'formatting',
  },
}
