import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_TITLE_ICON_PLACEMENT,
  DEFAULT_TITLE_TYPOGRAPHY,
  TITLE_ICON_PLACEMENTS,
  TITLE_TYPOGRAPHY,
} from 'lib/components/core/Title/constants'
import { TitleProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const TITLE_PROPS: Record<keyof TitleProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description:
      'Content rendered as the title. Plain string or number children are wrapped in Text using the selected typography. Custom React nodes are rendered directly.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  // appearance
  typography: {
    options: TITLE_TYPOGRAPHY,
    defaultValue: DEFAULT_TITLE_TYPOGRAPHY,
    description:
      'Typography style used for plain text children and for deriving the icon size and spacing.',
    group: 'appearance',
  },
  intent: {
    options: BOX_INTENTS,
    description: "Color tone applied to the component's main color.",
    group: 'appearance',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
    group: 'appearance',
  },
  // icon
  iconName: {
    options: ['IconName'],
    description: 'Name of the icon to render.',
    group: 'icon',
  },
  customSvgIcon: {
    options: ['ReactNode'],
    description: 'Custom SVG icon rendered when not using name prop.',
    group: 'icon',
  },
  iconPlacement: {
    options: TITLE_ICON_PLACEMENTS as unknown as string[],
    defaultValue: DEFAULT_TITLE_ICON_PLACEMENT,
    isRequired: false,
    isResponsive: false,
    description: 'Icon placement relative to children.',
    group: 'icon',
  },
}
