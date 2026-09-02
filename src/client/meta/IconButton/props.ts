import { BOX_COLORS, BOX_INTENTS, BOX_SURFACE_DEPTHS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_ICON_BUTTON_INTENT,
  DEFAULT_ICON_BUTTON_RIPPLE,
  DEFAULT_ICON_BUTTON_SCALE,
  DEFAULT_ICON_BUTTON_VARIANT,
  ICON_BUTTON_TAGS,
  ICON_BUTTON_VARIANTS,
} from 'lib/components/core/IconButton/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { IconButtonProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const ICON_BUTTON_PROPS: Record<keyof IconButtonProps, DocProp> = {
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
  },
  customSvgIcon: {
    options: ['ReactNode'],
    description: 'Custom SVG icon rendered instead of iconName.',
  },
  disabled: {
    options: ['boolean'],
    description: 'Disables the component and its interactions.',
  },
  iconName: {
    options: ['IconName'],
    isResponsive: true,
    description: 'Name of the icon to render.',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_ICON_BUTTON_INTENT),
    description: "Color tone applied to the component's main color.",
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
    options: ['boolean'],
    defaultValue: String(DEFAULT_ICON_BUTTON_RIPPLE),
    description: 'Toggles the ripple effect on pointer interaction.',
  },
  scale: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_ICON_BUTTON_SCALE,
    description: 'Controls the overall interaction geometry and icon proportions',
  },
  surfaceDepth: {
    options: BOX_SURFACE_DEPTHS,
    description:
      "Selects which depth tier the component's surface color is drawn from - base or raised - each with its own per-intent lightness and interaction states.",
  },
  tag: {
    options: ICON_BUTTON_TAGS,
    defaultValue: 'div',
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
  variant: {
    options: ICON_BUTTON_VARIANTS,
    defaultValue: String(DEFAULT_ICON_BUTTON_VARIANT),
    description: 'Visual style variant.',
  },
}
