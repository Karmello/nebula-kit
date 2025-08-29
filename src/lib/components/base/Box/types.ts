import {
  BoxIntent,
  BoxVariant,
  CssDisplay,
  CssOverflow,
  CssPosition,
  CssTextAlign,
  ResponsiveProp,
  ScaleValue,
} from 'lib/definitions'

export type BoxOwnProps = {
  /**
   * @category Appearance
   * @options *BoxVariant
   * @description Controls the visual style of the Box, such as background or border treatment. Variants come from the design system to ensure consistent presentation across components.
   */
  variant?: BoxVariant
  /**
   * @category Appearance
   * @options *BoxIntent
   * @description Defines the semantic role or tone of the Box, applying design-system colors and states consistently across components.
   */
  intent?: BoxIntent
  /**
   * @category Appearance
   * @options boolean
   * @description Marks the Box as interactive, enabling visual feedback (such as hover or focus styles) and signaling that the element can respond to user actions.
   */
  interactive?: boolean
  /**
   * @category Appearance
   * @options boolean
   * @description Indicates that the Box is inactive and non-interactive, applying visual styles and state to reflect its disabled condition.
   */
  disabled?: boolean
  /**
   * @category Appearance
   * @options 0 - 1
   * @default 1
   * @description Sets the transparency level of the Box, from fully visible to fully transparent.
   */
  opacity?: ResponsiveProp<number>
  /**
   * @category Appearance
   * @options ScaleValue | CSS
   * @default 0
   * @description Defines the corner rounding of the Box. By default corners are square, but you can customize rounding per component or set a global border radius through the provider for consistent styling across the system.
   */
  borderRadius?: ScaleValue | string
  /**
   * @category Typography alignment
   * @options *CssTextAlign
   * @default start
   * @description Controls the horizontal alignment of text content inside the Box.
   */
  textAlign?: ResponsiveProp<CssTextAlign>
  /**
   * @category Layout & Display
   * @options *CssDisplay
   * @default block
   * @description Determines how the Box is rendered in the layout, controlling its display behavior relative to surrounding elements.
   */
  display?: ResponsiveProp<CssDisplay>
  /**
   * @category Layout & Display
   * @options *CssOverflow
   * @default visible
   * @description Controls how content that exceeds the Box’s inline (horizontal) bounds is handled, including clipping and scroll behavior.
   */
  overflowX?: ResponsiveProp<CssOverflow>
  /**
   * @category Layout & Display
   * @options *CssOverflow
   * @default visible
   * @description Controls how content that exceeds the Box’s block (vertical) bounds is handled, including clipping and scroll behavior.
   */
  overflowY?: ResponsiveProp<CssOverflow>
  /**
   * @category Layout & Display
   * @options *CssPosition
   * @default static
   * @description Defines how the Box participates in the layout flow and how it’s positioned relative to its containing block.
   */
  position?: ResponsiveProp<CssPosition>
  /**
   * @category Layout & Display
   * @options ScaleValue | CSS
   * @default auto
   * @description Sets the offset from the top edge of the containing block when the Box is positioned.
   */
  top?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Layout & Display
   * @options ScaleValue | CSS
   * @default auto
   * @description Sets the offset from the right edge of the containing block when the Box is positioned.
   */
  right?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Layout & Display
   * @options ScaleValue | CSS
   * @default auto
   * @description Sets the offset from the bottom edge of the containing block when the Box is positioned.
   */
  bottom?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Layout & Display
   * @options ScaleValue | CSS
   * @default auto
   * @description Sets the offset from the left edge of the containing block when the Box is positioned.
   */
  left?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Sizing
   * @options ScaleValue | CSS
   * @default auto
   * @description Sets the Box’s logical block dimension (commonly height). Respects writing mode and the min/max block-size constraints.
   */
  blockSize?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Sizing
   * @options ScaleValue | CSS
   * @default auto
   * @description Defines the minimum block dimension the Box can shrink to.
   */
  minBlockSize?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Sizing
   * @options ScaleValue | CSS
   * @default none
   * @description Defines the maximum block dimension the Box can grow to.
   */
  maxBlockSize?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Sizing
   * @options ScaleValue | CSS
   * @default auto
   * @description Sets the Box’s logical inline dimension (commonly width). Respects writing mode and the min/max inline-size constraints.
   */
  inlineSize?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Sizing
   * @options ScaleValue | CSS
   * @default auto
   * @description Defines the minimum inline dimension the Box can shrink to.
   */
  minInlineSize?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Sizing
   * @options ScaleValue | CSS
   * @default none
   * @description Defines the maximum inline dimension the Box can grow to.
   */
  maxInlineSize?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Spacing
   * @options ScaleValue | CSS
   * @default 0
   * @description Sets padding on all sides of the Box.
   */
  p?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Spacing
   * @options ScaleValue | CSS
   * @default 0
   * @description Sets padding on the inline (horizontal) axis.
   */
  px?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Spacing
   * @options ScaleValue | CSS
   * @default 0
   * @description Sets padding on the block (vertical) axis.
   */
  py?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Spacing
   * @options ScaleValue | CSS
   * @default 0
   * @description Sets padding on the block-start (top) side.
   */
  pt?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Spacing
   * @options ScaleValue | CSS
   * @default 0
   * @description Sets padding on the inline-end (right) side.
   */
  pr?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Spacing
   * @options ScaleValue | CSS
   * @default 0
   * @description Sets padding on the block-end (bottom) side.
   */
  pb?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Spacing
   * @options ScaleValue | CSS
   * @default 0
   * @description Sets padding on the inline-start (left) side.
   */
  pl?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Spacing
   * @options ScaleValue | CSS
   * @default 0
   * @description Sets margin on all sides of the Box.
   */
  m?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Spacing
   * @options ScaleValue | CSS
   * @default 0
   * @description Sets margin on the inline (horizontal) axis.
   */
  mx?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Spacing
   * @options ScaleValue | CSS
   * @default 0
   * @description Sets margin on the block (vertical) axis.
   */
  my?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Spacing
   * @options ScaleValue | CSS
   * @default 0
   * @description Sets margin on the block-start (top) side.
   */
  mt?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Spacing
   * @options ScaleValue | CSS
   * @default 0
   * @description Sets margin on the inline-end (right) side.
   */
  mr?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Spacing
   * @options ScaleValue | CSS
   * @default 0
   * @description Sets margin on the block-end (bottom) side.
   */
  mb?: ResponsiveProp<ScaleValue | string>
  /**
   * @category Spacing
   * @options ScaleValue | CSS
   * @default 0
   * @description Sets margin on the inline-start (left) side.
   */
  ml?: ResponsiveProp<ScaleValue | string>
}
