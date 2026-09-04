import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_SECTION_INTENT,
  DEFAULT_SECTION_SIZE,
  DEFAULT_SECTION_VARIANT,
  SECTION_VARIANTS,
} from 'lib/components/core/Section/constants'
import {
  DEFAULT_TITLE_ICON_PLACEMENT,
  TITLE_ICON_PLACEMENTS,
} from 'lib/components/core/Title/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { SectionProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const SECTION_PROPS: Record<keyof SectionProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
  },
  heading: {
    options: ['string'],
    isRequired: true,
    description: 'Heading text.',
  },
  headingIntent: {
    options: BOX_INTENTS,
    description: "Color tone applied to the component's heading text.",
  },
  iconName: {
    options: ['IconName'],
    isResponsive: true,
    description: 'Name of the icon to render.',
  },
  iconPlacement: {
    options: TITLE_ICON_PLACEMENTS as unknown as string[],
    defaultValue: DEFAULT_TITLE_ICON_PLACEMENT,
    isRequired: false,
    isResponsive: false,
    description: 'Icon placement relative to heading.',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_SECTION_INTENT),
    description: "Color tone applied to the component's main color.",
  },
  interactive: {
    options: ['boolean'],
    description:
      'Enables visual interaction affordances such as hover and active styling. Sets drawable to true automatically.',
  },
  size: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_SECTION_SIZE,
    description: 'Controls overall proportions - adjusting heading size and spacings.',
  },
  tag: {
    options: ['HTML tag'],
    defaultValue: 'section',
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
    options: SECTION_VARIANTS,
    defaultValue: String(DEFAULT_SECTION_VARIANT),
    description: 'Visual style variant.',
  },
}
