import { ComponentMeta } from 'client/definitions'

import { Segment } from '..'
import { FLEX_META } from '../Flex/meta'
import { Box } from './../Box'
import { Button } from './../Button'
import { DEFAULT_SEGMENT_FLEX_DIRECTION, type SegmentProps } from './definitions'
import { SegmentItemProps } from './SegmentItem'

export const SEGMENT_META = {
  Segment: {
    overview: {
      bundle: 'core',
      title: 'Composite component that visually merges multiple Box-based surfaces into a single segmented group.',
      features: [
        'groups Box-based surfaces into a horizontal or vertical block',
        'automatically manages border radiuses for seamless attachment',
      ],

      composedOf: ['Flex'],
      slots: ['Segment.Item'],
    },
    props: {
      children: {
        ...FLEX_META.Flex.props.children,
        options: ['Segment.Item'],
        description: 'Any number of Segment.Item slots.',
      },
      flexDirection: {
        ...FLEX_META.Flex.props.flexDirection,
        defaultValue: String(DEFAULT_SEGMENT_FLEX_DIRECTION),
      },
      tag: FLEX_META.Flex.props.tag,
      tagAttrs: FLEX_META.Flex.props.tagAttrs,
      tagRef: FLEX_META.Flex.props.tagRef,
    },
    examples: [
      {
        description: 'Buttons arranged in a horizontal row.',
        jsx: (
          <Segment>
            <Segment.Item>
              <Button>Button 1</Button>
            </Segment.Item>
            <Segment.Item>
              <Button>Button 2</Button>
            </Segment.Item>
            <Segment.Item>
              <Button>Button 3</Button>
            </Segment.Item>
          </Segment>
        ),
      },
      {
        description: 'Buttons stretched to share the available horizontal space evenly.',
        jsx: (
          <Segment>
            <Segment.Item flex="1">
              <Button fullWidth>Button 1</Button>
            </Segment.Item>
            <Segment.Item flex="1">
              <Button fullWidth>Button 2</Button>
            </Segment.Item>
            <Segment.Item flex="1">
              <Button fullWidth>Button 3</Button>
            </Segment.Item>
          </Segment>
        ),
      },
      {
        description: 'Buttons stacked vertically.',
        jsx: (
          <Segment flexDirection="column">
            <Segment.Item>
              <Button>Button 1</Button>
            </Segment.Item>
            <Segment.Item>
              <Button>Button 2</Button>
            </Segment.Item>
            <Segment.Item>
              <Button>Button 3</Button>
            </Segment.Item>
          </Segment>
        ),
      },
      {
        description: 'Buttons that expand to fill the vertical space evenly.',
        jsx: (
          <Segment flexDirection="column">
            <Segment.Item flex="1">
              <Button fullWidth>Button 1</Button>
            </Segment.Item>
            <Segment.Item flex="1">
              <Button fullWidth>Button 2</Button>
            </Segment.Item>
            <Segment.Item flex="1">
              <Button fullWidth>Button 3</Button>
            </Segment.Item>
          </Segment>
        ),
      },
      {
        description: 'Outlined buttons arranged in a horizontal row.',
        jsx: (
          <Segment>
            <Segment.Item>
              <Button variant="outline">Button 1</Button>
            </Segment.Item>
            <Segment.Item>
              <Button variant="outline">Button 2</Button>
            </Segment.Item>
            <Segment.Item>
              <Button variant="outline">Button 3</Button>
            </Segment.Item>
          </Segment>
        ),
      },
      {
        description: 'Outlined buttons in a stretched horizontal group.',
        jsx: (
          <Segment>
            <Segment.Item flex="1">
              <Button variant="outline" fullWidth>
                Button 1
              </Button>
            </Segment.Item>
            <Segment.Item flex="1">
              <Button variant="outline" fullWidth>
                Button 2
              </Button>
            </Segment.Item>
            <Segment.Item flex="1">
              <Button variant="outline" fullWidth>
                Button 3
              </Button>
            </Segment.Item>
          </Segment>
        ),
      },
      {
        description: 'Outlined buttons stacked vertically.',
        jsx: (
          <Segment flexDirection="column">
            <Segment.Item>
              <Button variant="outline">Button 1</Button>
            </Segment.Item>
            <Segment.Item>
              <Button variant="outline">Button 2</Button>
            </Segment.Item>
            <Segment.Item>
              <Button variant="outline">Button 3</Button>
            </Segment.Item>
          </Segment>
        ),
      },
      {
        description: 'Outlined buttons that expand to fill the vertical space evenly.',
        jsx: (
          <Segment flexDirection="column">
            <Segment.Item flex="1">
              <Button variant="outline" fullWidth>
                Button 1
              </Button>
            </Segment.Item>
            <Segment.Item flex="1">
              <Button variant="outline" fullWidth>
                Button 2
              </Button>
            </Segment.Item>
            <Segment.Item flex="1">
              <Button variant="outline" fullWidth>
                Button 3
              </Button>
            </Segment.Item>
          </Segment>
        ),
      },
      {
        description: 'Buttons with different variants attached together.',
        jsx: (
          <Box overflowX="auto">
            <Segment>
              <Segment.Item>
                <Button variant="solid">Button 1</Button>
              </Segment.Item>
              <Segment.Item>
                <Button variant="outline">Button 2</Button>
              </Segment.Item>
              <Segment.Item>
                <Button variant="soft-outline">Button 3</Button>
              </Segment.Item>
              <Segment.Item>
                <Button variant="ghost">Button 4</Button>
              </Segment.Item>
            </Segment>
          </Box>
        ),
      },
    ],
    changelog: {
      '0.2.3': ['released'],
    },
  } as ComponentMeta<SegmentProps>,
  SegmentItem: {
    overview: {
      bundle: 'core',
      name: 'Segment.Item',
      title: 'Wrapper for individual Segment children.',
      features: ['provides per-child layout control inside a Segment'],
      guidelines: [
        'targets the ".neb-box" class to adjust border radiuses, so children must be Boxes or render a Box as the root element under the hood',
      ],
      composedOf: ['Flex.Item'],
    },
    props: {
      alignSelf: FLEX_META.FlexItem.props.alignSelf,
      children: FLEX_META.FlexItem.props.children,
      flex: FLEX_META.FlexItem.props.flex,
      flexBasis: FLEX_META.FlexItem.props.flexBasis,
      flexGrow: FLEX_META.FlexItem.props.flexGrow,
      flexShrink: FLEX_META.FlexItem.props.flexShrink,
      hidden: FLEX_META.FlexItem.props.hidden,
      order: FLEX_META.FlexItem.props.order,
      tag: FLEX_META.FlexItem.props.tag,
      tagAttrs: FLEX_META.FlexItem.props.tagAttrs,
      tagRef: FLEX_META.FlexItem.props.tagRef,
    },
  } as ComponentMeta<SegmentItemProps>,
}
