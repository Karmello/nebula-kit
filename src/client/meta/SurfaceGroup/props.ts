import {
  BOX_COLORS,
  BOX_INTENTS,
  BOX_SURFACES,
  BOX_THEMES,
  BOX_VARIANTS,
} from 'lib/components/core/Box/constants'
import {
  DEFAULT_SURFACE_GROUP_DISPLAY,
  DEFAULT_SURFACE_GROUP_FLEX_DIRECTION,
} from 'lib/components/core/SurfaceGroup/constants'
import {
  CSS_DISPLAY,
  CSS_FLEX_DIRECTION,
  CSS_JUSTIFY_SELF,
  CSS_OVERFLOW,
  CSS_POSITION,
  CSS_VISIBILITY,
} from 'lib/constants'
import { SurfaceGroupProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const SURFACE_GROUP_PROPS: Record<keyof SurfaceGroupProps, DocProp> = {
  alignSelf: {
    options: ['string'],
    isResponsive: true,
    description:
      "Overrides the parent container's alignItems value for this specific group, in a flex or grid container.",
    link: true,
  },
  blockSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical height.',
    link: true,
  },
  borderBottomLeftRadius: {
    options: ['string'],
    isResponsive: true,
    description: 'Border radius for the bottom left corner of the overall group shape.',
    link: true,
  },
  borderBottomRightRadius: {
    options: ['string'],
    isResponsive: true,
    description: 'Border radius for the bottom right corner of the overall group shape.',
    link: true,
  },
  borderRadius: {
    options: ['string'],
    isResponsive: true,
    description: 'Border radius for the overall group shape, overriding the global default.',
    link: true,
  },
  borderTopLeftRadius: {
    options: ['string'],
    isResponsive: true,
    description: 'Border radius for the top left corner of the overall group shape.',
    link: true,
  },
  borderTopRightRadius: {
    options: ['string'],
    isResponsive: true,
    description: 'Border radius for the top right corner of the overall group shape.',
    link: true,
  },
  bottom: {
    options: ['string'],
    isResponsive: true,
    description: 'Bottom offset.',
    link: true,
  },
  brand: {
    options: BOX_COLORS,
    description: 'Default surface color context for the group and its children.',
  },
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description:
      'The items to join. Any component works, as long as it forwards tagAttrs to its own outer surface - the group clones each child and injects the computed border radius/width there.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the group.',
  },
  display: {
    options: CSS_DISPLAY,
    defaultValue: String(DEFAULT_SURFACE_GROUP_DISPLAY),
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
  flexBasis: {
    options: ['string'],
    isResponsive: true,
    description: "Sets the group's initial main-size before free space is distributed.",
    link: true,
  },
  flexDirection: {
    options: CSS_FLEX_DIRECTION,
    defaultValue: String(DEFAULT_SURFACE_GROUP_FLEX_DIRECTION),
    isResponsive: true,
    description: 'Sets the axis items are arranged and joined along.',
    link: true,
  },
  flexGrow: {
    options: ['string'],
    isResponsive: true,
    description:
      'Controls how much the group can grow relative to its siblings when extra space is available.',
    link: true,
  },
  flexShrink: {
    options: ['string'],
    isResponsive: true,
    description:
      'Controls how much the group can shrink relative to its siblings when space is limited.',
    link: true,
  },
  gap: {
    options: ['string'],
    isResponsive: true,
    description:
      'Defines spacing between items. Has no visible effect while items are joined (squared is false), since adjacent edges touch.',
    link: true,
  },
  gridColumn: {
    options: ['string'],
    isResponsive: true,
    description: "Sets the group's horizontal position or span between grid columns.",
    link: true,
  },
  gridRow: {
    options: ['string'],
    isResponsive: true,
    description: "Sets the group's vertical position or span between grid rows.",
    link: true,
  },
  hidden: {
    options: ['boolean'],
    isResponsive: true,
    description: 'Controls whether the group is hidden and removed from layout.',
  },
  inlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Logical width.',
    link: true,
  },
  inset: {
    options: ['string'],
    isResponsive: true,
    description:
      'Shorthand for setting top, right, bottom and left offsets. Directional props override it.',
    link: true,
  },
  intent: {
    options: BOX_INTENTS,
    description: "Color tone applied to the group's main color.",
  },
  justifySelf: {
    options: CSS_JUSTIFY_SELF,
    isResponsive: true,
    description: 'Controls horizontal alignment of the group within its grid cell.',
    link: true,
  },
  left: {
    options: ['string'],
    isResponsive: true,
    description: 'Left offset.',
    link: true,
  },
  margin: {
    options: ['string'],
    isResponsive: true,
    description: 'Margin for all sides.',
    link: true,
  },
  marginBlock: {
    options: ['string'],
    isResponsive: true,
    description: 'Margin for the top and bottom sides.',
    link: true,
  },
  marginBottom: {
    options: ['string'],
    isResponsive: true,
    description: 'Margin for the bottom side.',
    link: true,
  },
  marginInline: {
    options: ['string'],
    isResponsive: true,
    description: 'Margin for the left and right sides.',
    link: true,
  },
  marginLeft: {
    options: ['string'],
    isResponsive: true,
    description: 'Margin for the left side.',
    link: true,
  },
  marginRight: {
    options: ['string'],
    isResponsive: true,
    description: 'Margin for the right side.',
    link: true,
  },
  marginTop: {
    options: ['string'],
    isResponsive: true,
    description: 'Margin for the top side.',
    link: true,
  },
  maxBlockSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Maximum logical height.',
    link: true,
  },
  maxInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Maximum logical width.',
    link: true,
  },
  minBlockSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Minimum logical height.',
    link: true,
  },
  minInlineSize: {
    options: ['string'],
    isResponsive: true,
    description: 'Minimum logical width.',
    link: true,
  },
  opacity: {
    options: ['string'],
    isResponsive: true,
    description: 'Transparency level, from fully visible to fully transparent.',
    link: true,
  },
  order: {
    options: ['string'],
    isResponsive: true,
    description: "Defines the group's order relative to its siblings, independent of source order.",
    link: true,
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
  paddingBottom: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the bottom side.',
    link: true,
  },
  paddingInline: {
    options: ['string'],
    isResponsive: true,
    description: 'Padding for the left and right sides.',
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
  position: {
    options: CSS_POSITION,
    isResponsive: true,
    description: 'Position in the layout flow.',
    link: true,
  },
  right: {
    options: ['string'],
    isResponsive: true,
    description: 'Right offset.',
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
  top: {
    options: ['string'],
    isResponsive: true,
    description: 'Top offset.',
    link: true,
  },
  variant: {
    options: BOX_VARIANTS,
    description: 'Visual style variant.',
  },
  visibility: {
    options: Object.values(CSS_VISIBILITY),
    isResponsive: true,
    description: 'Controls whether the group is visible without affecting layout.',
    link: true,
  },
  zIndex: {
    options: ['number'],
    isResponsive: true,
    description: 'Controls the stacking order.',
    link: true,
  },
}
