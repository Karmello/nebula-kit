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
  elemTag: {
    options: ICON_BUTTON_TAGS,
    defaultValue: 'div',
    description: 'The HTML tag to be rendered.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  onClick: {
    options: ['e => void'],
    description: 'Click event handler for the element.',
  },
  // surface
  variant: {
    options: ICON_BUTTON_VARIANTS,
    defaultValue: String(DEFAULT_ICON_BUTTON_VARIANT),
    description: 'Visual style variant.',
    group: 'surface',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_ICON_BUTTON_INTENT),
    description: "Color tone applied to the component's main color.",
    group: 'surface',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
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
  loading: {
    options: ['boolean'],
    description: 'Activates the loading state, shows a spinner and prevents interaction.',
    group: 'interaction',
  },
  ripple: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_ICON_BUTTON_RIPPLE),
    description: 'Toggles the ripple effect on pointer interaction.',
    group: 'interaction',
  },
  // size
  scale: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_ICON_BUTTON_SCALE,
    description: 'Controls the overall interaction geometry and icon proportions',
    group: 'size',
  },
  // icon
  iconName: {
    options: ['IconName'],
    description: 'Name of the icon to render.',
    group: 'icon',
  },
  customSvgIcon: {
    options: ['ReactNode'],
    description: 'Custom SVG icon rendered instead of iconName.',
    group: 'icon',
  },
}
