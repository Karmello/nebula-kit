import { ComponentMeta } from 'client/definitions'
import {
  Flex,
  Box,
  FLEX_INHERITED_PROPS,
  FlexOwnProps,
  FlexItemOwnProps,
  FLEX_ITEM_INHERITED_PROPS,
} from 'lib/components'

import {
  CssFlexAlignItems,
  CssFlexDirection,
  CssFlexItemAlignSelf,
  CssFlexJustifyContent,
  CssFlexWrap,
} from 'lib/definitions'

import { applyResponsiveProps } from './_helpers'

const FLEX_META: ComponentMeta<FlexOwnProps> = {
  overview: {
    description: 'A layout container that arranges its children using CSS flexbox.',
    role: [
      'provide a flexbox-based layout wrapper',
      'control flow, alignment, and wrapping of children',
      'manage spacing between items with gap properties',
    ],
    behavior: [
      'always applies display: flex',
      'uses Box internally to ensure consistent reset and baseline styles',
      'provides a <Flex.Item> subcomponent for per-child layout control',
    ],
    byDefault: [
      'renders as a <div> element',
      'arranges children in a row without wrapping',
      'does not apply any gap between children',
    ],
    examplesOfUse: [
      'arranging items in a one-dimensional row or column',
      'distributing space between elements with gaps or justification',
      'building responsive layouts that adapt across breakpoints',
    ],
    composedOf: FLEX_INHERITED_PROPS,
  },
  props: [
    {
      name: 'flexDirection',
      options: Object.values(CssFlexDirection),
      defaultValue: CssFlexDirection[0],
      isRequired: false,
      isResponsive: true,
      description: 'Sets the flow of flex items along the main axis.',
    },
    {
      name: 'flexWrap',
      options: Object.values(CssFlexWrap),
      defaultValue: CssFlexWrap[0],
      isRequired: false,
      isResponsive: true,
      description: 'Controls whether flex items stay on one line or wrap onto multiple lines.',
    },
    {
      name: 'justifyContent',
      options: Object.values(CssFlexJustifyContent),
      defaultValue: CssFlexJustifyContent[0],
      isRequired: false,
      isResponsive: true,
      description: 'Distributes flex items along the main axis.',
    },
    {
      name: 'alignItems',
      options: Object.values(CssFlexAlignItems),
      defaultValue: CssFlexAlignItems[0],
      isRequired: false,
      isResponsive: true,
      description: 'Aligns flex items along the cross axis.',
    },
    {
      name: 'gap',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'initial',
      isRequired: false,
      isResponsive: true,
      description: 'Defines spacing between flex items on both axes.',
    },
    {
      name: 'rowGap',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'initial',
      isRequired: false,
      isResponsive: true,
      description: 'Defines vertical spacing between rows of flex items.',
    },
    {
      name: 'columnGap',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'initial',
      isRequired: false,
      isResponsive: true,
      description: 'Defines horizontal spacing between columns of flex items.',
    },
  ],
  examples: [
    {
      description: 'Flex arranging two outlined boxes side by side.',
      jsx: (
        <Flex>
          <Box variant="outline" intent="primary">
            Item 1
          </Box>
          <Box variant="outline" intent="primary">
            Item 2
          </Box>
        </Flex>
      ),
    },
  ],
}

const FLEX_ITEM_META: ComponentMeta<FlexItemOwnProps> = {
  overview: {
    title: 'Flex.Item',
    description: 'Flex item represents a single child inside a Flex container.',
    role: [
      'control per-item growth, shrink, and basis in the flex layout',
      'allow item-level alignment overrides relative to the parent',
    ],
    behavior: [
      'must be used inside a Flex container',
      'wraps its child with Box for consistent styling and reset',
    ],
    byDefault: [
      'renders as a <div> element',
      "aligns according to the parent's alignment rules unless overridden",
    ],
    examplesOfUse: [
      "fixing one item's width while others flex around it",
      'aligning a single child differently from siblings',
      'making an element grow or shrink independently in a shared row or column',
    ],
    composedOf: FLEX_ITEM_INHERITED_PROPS,
  },
  props: [
    {
      name: 'flex',
      options: ['CSS'],
      defaultValue: '0 1 auto',
      isRequired: false,
      isResponsive: true,
      description: 'defines how the item grows, shrinks, and sets its base size within the Flex container',
    },
    {
      name: 'flexGrow',
      options: ['CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description:
        'controls how much the item can grow relative to the other items when extra space is available',
    },
    {
      name: 'flexShrink',
      options: ['CSS'],
      defaultValue: '1',
      isRequired: false,
      isResponsive: true,
      description: 'controls how much the item can shrink relative to the other items when space is limited',
    },
    {
      name: 'flexBasis',
      options: ['CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: "sets the item's initial main-size before free space is distributed",
    },
    {
      name: 'alignSelf',
      options: CssFlexItemAlignSelf as unknown as string[],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: "overrides the container's alignItems value for this specific item",
    },
    {
      name: 'order',
      options: ['CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description: "defines the item's order relative to other flex items, independent of source order",
    },
  ],
  examples: [
    {
      description: 'Using Flex.Item to let one item expand while the other keeps its natural size.',
      jsx: (
        <Flex>
          <Flex.Item flex={1}>
            <Box variant="outline" intent="primary">
              Item 1
            </Box>
          </Flex.Item>
          <Flex.Item>
            <Box variant="outline" intent="primary">
              Item 2
            </Box>
          </Flex.Item>
        </Flex>
      ),
    },
  ],
}

const META = {
  Flex: FLEX_META,
  'Flex.Item': FLEX_ITEM_META,
}

applyResponsiveProps(META)

export default META
