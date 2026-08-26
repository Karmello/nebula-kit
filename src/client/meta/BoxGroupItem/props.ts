import {
  BOX_COLORS,
  BOX_INTENTS,
  BOX_SURFACES,
  BOX_THEMES,
  BOX_VARIANTS,
} from 'lib/components/core/Box/constants'
import { CSS_CURSOR, CSS_TEXT_ALIGN } from 'lib/constants'
import { BoxGroupItemProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const BOX_GROUP_ITEM_PROPS: Record<keyof BoxGroupItemProps, DocProp> = {
  blockSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical height.',
    link: true,
  },
  brand: {
    options: BOX_COLORS,
    description: 'Default surface color context for the item and its descendants.',
  },
  children: {
    options: ['ReactNode'],
    description:
      'Content rendered inside the item. Optional - an item can be left empty, e.g. used purely as a background.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the item.',
  },
  cursor: {
    options: CSS_CURSOR,
    description: 'Controls the mouse cursor shown when hovering over the item.',
  },
  disabled: {
    options: ['boolean'],
    description: 'Disables the item and its interactions.',
  },
  drawable: {
    options: ['boolean'],
    description:
      'Enables visual rendering. When true, the item can draw a surface using variant and intent. When false, it is structural and has no visual styling.',
  },
  elevated: {
    options: ['boolean'],
    description:
      'Shifts the item onto an elevated surface level, adjusting the base surface and all related interaction states together.',
  },
  inlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical width.',
    link: true,
  },
  intent: {
    options: BOX_INTENTS,
    description: "Color tone applied to the item's main color.",
  },
  interactive: {
    options: ['boolean'],
    description:
      'Enables visual interaction affordances such as hover and active styling. Sets drawable to true automatically.',
  },
  padding: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for all sides.',
    link: true,
  },
  paddingBlock: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the top and bottom sides.',
    link: true,
  },
  paddingInline: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the left and right sides.',
    link: true,
  },
  ripple: {
    options: ['boolean'],
    description: 'Toggles the ripple effect on pointer interaction.',
  },
  surface: {
    options: BOX_SURFACES,
    description:
      'Applies a persistent surface behavior that overrides transient interaction states like hover and active.',
  },
  tag: {
    options: ['HTML tag'],
    defaultValue: 'div',
    description: 'The HTML tag to be rendered for the item.',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the item tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the item HTML tag.',
  },
  textAlign: {
    options: CSS_TEXT_ALIGN,
    isResponsive: true,
    description: 'Text alignment within the item.',
    link: true,
  },
  theme: {
    options: BOX_THEMES,
    isResponsive: true,
    description:
      'Sets a local theme boundary for the item and its drawable descendants. Supports explicit themes, the global application theme or the opposite of the global application theme.',
  },
  variant: {
    options: BOX_VARIANTS,
    description: 'Visual style variant.',
  },
}
