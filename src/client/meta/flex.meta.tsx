import { PropCategory } from 'client/definitions'
import { Flex, Box, FLEX_INHERITED_PROPS, FlexOwnProps, FlexItemProps } from 'lib/components'

import {
  ComponentMeta,
  CssFlexAlignItems,
  CssFlexDirection,
  CssFlexJustifyContent,
  CssFlexWrap,
} from 'lib/definitions'

import { applyResponsiveProps } from './_helpers'

const FLEX_META: ComponentMeta<FlexOwnProps & FlexItemProps> = {
  overview: {
    name: 'Flex',
    description: 'A layout container that arranges its children using CSS flexbox.',
    responsibilities: [
      'provide a flexbox-based layout wrapper',
      'control flow, alignment, and wrapping of children',
      'manage spacing between items with gap properties',
    ],
    characteristics: [
      'always applies display: flex',
      'uses Box internally to ensure consistent reset and baseline styles',
      'provides a <Flex.Item> subcomponent for per-child layout control',
    ],
    defaultBehavior: [
      'renders as a <div> element',
      'arranges children in a row without wrapping',
      'does not apply any gap between children',
    ],
    useCases: [
      'arranging items in a one-dimensional row or column',
      'distributing space between elements with gaps or justification',
      'building responsive layouts that adapt across breakpoints',
    ],
    inheritedProps: FLEX_INHERITED_PROPS,
  },
  props: [
    {
      category: PropCategory.flex,
      name: 'flexDirection',
      options: Object.values(CssFlexDirection),
      defaultValue: CssFlexDirection[0],
      isRequired: false,
      isResponsive: true,
      description: 'Sets the flow of flex items along the main axis.',
    },
    {
      category: PropCategory.flex,
      name: 'flexWrap',
      options: Object.values(CssFlexWrap),
      defaultValue: CssFlexWrap[0],
      isRequired: false,
      isResponsive: true,
      description: 'Controls whether flex items stay on one line or wrap onto multiple lines.',
    },
    {
      category: PropCategory.flex,
      name: 'justifyContent',
      options: Object.values(CssFlexJustifyContent),
      defaultValue: CssFlexJustifyContent[0],
      isRequired: false,
      isResponsive: true,
      description: 'Distributes flex items along the main axis.',
    },
    {
      category: PropCategory.flex,
      name: 'alignItems',
      options: Object.values(CssFlexAlignItems),
      defaultValue: CssFlexAlignItems[0],
      isRequired: false,
      isResponsive: true,
      description: 'Aligns flex items along the cross axis.',
    },
    {
      category: PropCategory.flex,
      name: 'gap',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'initial',
      isRequired: false,
      isResponsive: true,
      description: 'Defines spacing between flex items on both axes.',
    },
    {
      category: PropCategory.flex,
      name: 'rowGap',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'initial',
      isRequired: false,
      isResponsive: true,
      description: 'Defines vertical spacing between rows of flex items.',
    },
    {
      category: PropCategory.flex,
      name: 'columnGap',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'initial',
      isRequired: false,
      isResponsive: true,
      description: 'Defines horizontal spacing between columns of flex items.',
    },
    {
      category: PropCategory.flexItem,
      name: 'flex',
      options: ['CSS'],
      defaultValue: '0 1 auto',
      isRequired: false,
      isResponsive: true,
      description: 'defines how the item grows, shrinks, and sets its base size within the Flex container',
    },
    {
      category: PropCategory.flexItem,
      name: 'flexGrow',
      options: ['CSS'],
      defaultValue: '0',
      isRequired: false,
      isResponsive: true,
      description:
        'controls how much the item can grow relative to the other items when extra space is available',
    },
    {
      category: PropCategory.flexItem,
      name: 'flexShrink',
      options: ['CSS'],
      defaultValue: '1',
      isRequired: false,
      isResponsive: true,
      description: 'controls how much the item can shrink relative to the other items when space is limited',
    },
    {
      category: PropCategory.flexItem,
      name: 'flexBasis',
      options: ['CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: "sets the item's initial main-size before free space is distributed",
    },
    {
      category: PropCategory.flexItem,
      name: 'alignSelf',
      options: ['CSS'],
      defaultValue: 'auto',
      isRequired: false,
      isResponsive: true,
      description: "overrides the container's alignItems value for this specific item",
    },
    {
      category: PropCategory.flexItem,
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

applyResponsiveProps(FLEX_META)

export default FLEX_META
