import {
  BOX_COLORS,
  BOX_INTENTS,
  BOX_SURFACES,
  BOX_THEMES,
  BOX_VARIANTS,
} from 'lib/components/core/Box/constants'
import {
  DEFAULT_BOX_GROUP_DISPLAY,
  DEFAULT_BOX_GROUP_FLEX_DIRECTION,
} from 'lib/components/core/BoxGroup/constants'
import { CSS_DISPLAY, CSS_FLEX_DIRECTION, CSS_OVERFLOW } from 'lib/constants'
import { BoxGroupProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const BOX_GROUP_PROPS: Record<keyof BoxGroupProps, DocProp> = {
  brand: {
    options: BOX_COLORS,
    description: 'Default surface color context for the group and its items.',
  },
  children: {
    options: ['BoxGroup.Item'],
    isRequired: true,
    description: 'One or more BoxGroup.Item slots.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the group.',
  },
  display: {
    options: CSS_DISPLAY,
    defaultValue: String(DEFAULT_BOX_GROUP_DISPLAY),
    isResponsive: true,
    description: 'Display type controlling how the group is laid out.',
    link: true,
  },
  drawable: {
    options: ['boolean'],
    description:
      'Enables visual rendering. When true, the group can draw a surface using variant and intent. When false, it is structural and has no visual styling.',
  },
  elevated: {
    options: ['boolean'],
    description:
      'Shifts the group onto an elevated surface level, adjusting the base surface and all related interaction states together.',
  },
  flexDirection: {
    options: CSS_FLEX_DIRECTION,
    defaultValue: String(DEFAULT_BOX_GROUP_FLEX_DIRECTION),
    isResponsive: true,
    description: 'Sets the axis items are arranged and joined along.',
    link: true,
  },
  gap: {
    options: ['string'],
    isResponsive: true,
    description:
      'Defines spacing between items. Has no visible effect while items are joined (squared is false), since adjacent edges touch.',
    link: true,
  },
  inlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical width.',
    link: true,
  },
  intent: {
    options: BOX_INTENTS,
    description: "Color tone applied to the group's main color.",
  },
  interactive: {
    options: ['boolean'],
    description:
      'Enables visual interaction affordances such as hover and active styling. Sets drawable to true automatically.',
  },
  overflow: {
    options: CSS_OVERFLOW,
    isResponsive: true,
    description: 'Overflow behavior for both axes.',
    link: true,
  },
  overflowX: {
    options: CSS_OVERFLOW,
    isResponsive: true,
    description: 'Overflow behavior on the horizontal axis.',
    link: true,
  },
  overflowY: {
    options: CSS_OVERFLOW,
    isResponsive: true,
    description: 'Overflow behavior on the vertical axis.',
    link: true,
  },
  paddingBottom: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the bottom side.',
    link: true,
  },
  paddingLeft: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the left side.',
    link: true,
  },
  paddingRight: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the right side.',
    link: true,
  },
  paddingTop: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the top side.',
    link: true,
  },
  squared: {
    options: ['boolean'],
    description:
      'Forces every item to keep all four corners rounded, instead of joining adjacent items into a single continuous shape with shared borders.',
  },
  surface: {
    options: BOX_SURFACES,
    description:
      'Applies a persistent surface behavior that overrides transient interaction states like hover and active.',
  },
  tag: {
    options: ['HTML tag'],
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
  theme: {
    options: BOX_THEMES,
    isResponsive: true,
    description:
      'Sets a local theme boundary for the group and its drawable descendants. Supports explicit themes, the global application theme or the opposite of the global application theme.',
  },
  variant: {
    options: BOX_VARIANTS,
    description: 'Visual style variant.',
  },
}
