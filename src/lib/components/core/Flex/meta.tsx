import {
  CSS_FLEX_ALIGN_CONTENT,
  CSS_FLEX_ALIGN_ITEMS,
  CSS_FLEX_DIRECTION,
  CSS_FLEX_DISPLAY,
  CSS_FLEX_ITEM_ALIGN_SELF,
  CSS_FLEX_JUSTIFY_CONTENT,
  CSS_FLEX_WRAP,
  PROP_GROUPS,
  TSHIRT_SIZES,
} from 'lib/constants'
import { Flex, FlexItemProps, FlexProps } from 'lib/index.core'
import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import { Box } from '../Box'
import { BOX_META } from '../Box/meta'

export const FLEX_META = {
  Flex: {
    overview: {
      bundle: 'core',
      title:
        'Layout component built on CSS Flexbox, providing a one-dimensional system for arranging children in a row or column.',
      features: [
        'provides a flexbox-based layout wrapper',
        'controls flow, alignment and wrapping of children',
        'manages spacing between children with gap properties',
      ],
      composedOf: ['Box'],
      slots: ['Flex.Item'],
    },
    props: {
      flexDirection: {
        group: PROP_GROUPS.FLEX_BOX,
        options: CSS_FLEX_DIRECTION,
        isResponsive: true,
        description: 'Sets the flow of children along the main axis.',
        link: true,
      },
      flexWrap: {
        group: PROP_GROUPS.FLEX_BOX,
        options: CSS_FLEX_WRAP,
        isResponsive: true,
        description: 'Controls whether children stay on one line or wrap onto multiple lines.',
        link: true,
      },
      justifyContent: {
        group: PROP_GROUPS.FLEX_BOX,
        options: CSS_FLEX_JUSTIFY_CONTENT,
        isResponsive: true,
        description: 'Distributes children along the main axis.',
        link: true,
      },
      alignItems: {
        group: PROP_GROUPS.FLEX_BOX,
        options: CSS_FLEX_ALIGN_ITEMS,
        isResponsive: true,
        description: 'Aligns items within each row along the cross axis.',
        link: true,
      },
      alignContent: {
        group: PROP_GROUPS.FLEX_BOX,
        options: CSS_FLEX_ALIGN_CONTENT,
        isResponsive: true,
        description: 'Aligns rows of items along the cross axis when wrapping is enabled.',
        link: true,
      },
      gap: {
        group: PROP_GROUPS.FLEX_BOX,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Defines spacing between children on both axes.',
        link: true,
      },
      rowGap: {
        group: PROP_GROUPS.FLEX_BOX,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Defines vertical spacing between rows of children.',
        link: true,
      },
      columnGap: {
        group: PROP_GROUPS.FLEX_BOX,
        options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Defines horizontal spacing between columns of children.',
        link: true,
      },
      ...BOX_META.Box.props,
      children: {
        group: PROP_GROUPS.FLEX_BOX,
        ...BOX_META.Box.props.children,
        description: 'Flex.Item or any React node.',
      },
      display: {
        group: PROP_GROUPS.LAYOUT,
        options: CSS_FLEX_DISPLAY,
        isResponsive: true,
        description: 'Switches between block and inline behavior.',
        link: true,
      },
    },
    examples: [
      {
        description: 'Flex arranging two boxes side by side.',
        jsx: (
          <Flex>
            <Box drawable variant="outline" intent="primary">
              Item 1
            </Box>
            <Box drawable variant="outline" intent="primary">
              Item 2
            </Box>
          </Flex>
        ),
      },
    ],
    changelog: {
      '0.9.0': [
        'exposed `hidden` prop on Flex.Item via Box',
        'added support for predefined size scale values on gap-related props',
      ],
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<FlexProps>,
  FlexItem: {
    overview: {
      bundle: 'core',
      name: 'Flex.Item?',
      title: 'Flex child wrapper used to control layout of a single item.',
      features: [
        'controls per-item growth, shrink and basis in the flex layout',
        'allows item-level alignment overrides relative to the parent',
      ],
      composedOf: ['Box'],
    },
    props: {
      flex: {
        group: PROP_GROUPS.FLEX_BOX,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Shorthand for flex-grow, flex-shrink and flex-basis.',
        link: true,
      },
      flexBasis: {
        group: PROP_GROUPS.FLEX_BOX,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: "Sets the item's initial main-size before free space is distributed.",
        link: true,
      },
      flexGrow: {
        group: PROP_GROUPS.FLEX_BOX,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Controls how much the item can grow relative to the other items when extra space is available.',
        link: true,
      },
      flexShrink: {
        group: PROP_GROUPS.FLEX_BOX,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Controls how much the item can shrink relative to the other items when space is limited.',
        link: true,
      },
      alignSelf: {
        group: PROP_GROUPS.FLEX_BOX,
        options: CSS_FLEX_ITEM_ALIGN_SELF,
        isResponsive: true,
        description: "Overrides the parent container's alignItems value for this specific item.",
        link: true,
      },
      order: {
        group: PROP_GROUPS.FLEX_BOX,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: "Defines the item's order relative to other items, independent of source order.",
        link: true,
      },
      ...BOX_META.Box.props,
    },
    examples: [
      {
        description: 'Using Flex.Item to let one item expand while the other keeps its natural size.',
        jsx: (
          <Flex>
            <Flex.Item flex="1">
              <Box drawable variant="outline" intent="primary">
                Item 1
              </Box>
            </Flex.Item>
            <Flex.Item>
              <Box drawable variant="outline" intent="primary">
                Item 2
              </Box>
            </Flex.Item>
          </Flex>
        ),
      },
    ],
  } satisfies ComponentMeta<FlexItemProps>,
}
