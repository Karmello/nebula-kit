import { FLEX_META } from 'lib/components/core/Flex/meta'
import { PROP_GROUPS } from 'lib/constants'
import { Box, Text } from 'lib/index.core'
import { ActionGroup } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import {
  ACTION_GROUP_ATTACHED,
  ACTION_GROUP_DIRECTION,
  ACTION_GROUP_GAP,
  DEFAULT_ACTION_GROUP_DIRECTION,
  DEFAULT_ACTION_GROUP_GAP,
  DEFAULT_ACTION_GROUP_INTENT,
  DEFAULT_ACTION_GROUP_RIPPLE,
} from './constants'
import { ACTION_GROUP_ITEM_TAGS, ActionGroupItemProps, DEFAULT_ACTION_GROUP_ITEM_TAG } from './slots'
import { ActionGroupProps } from './types'

export const ACTION_GROUP_META = {
  ActionGroup: {
    overview: {
      bundle: 'pro',
      title: 'Organize and navigate related actions.',
      description:
        'ActionGroup arranges interactive actions in a horizontal or vertical flow, providing a consistent foundation for navigation, focus management, keyboard interactions and joined surfaces. It is commonly used to build tabs, menus, navigation controls, segmented controls and selection interfaces.',
      features: [
        'provides joined surfaces with automatic border radius management',
        'supports horizontal and vertical layouts',
        'implements roving tabindex keyboard navigation',
        'automatically skips disabled items during keyboard navigation',
        'supports disabled and consumer-controlled selected states',
        'supports polymorphic item rendering through the tag prop',
        'allows arbitrary content inside each item',
      ],
      composedOf: ['Flex'],
      topLevelTags: ['div'],
      slots: ['ActionGroup.Item'],
    },
    props: {
      color: FLEX_META.Flex.props.color,
      intent: {
        ...FLEX_META.Flex.props.intent,
        defaultValue: String(DEFAULT_ACTION_GROUP_INTENT),
      },
      elevated: FLEX_META.Flex.props.elevated,
      ripple: {
        ...FLEX_META.Flex.props.ripple,
        defaultValue: String(DEFAULT_ACTION_GROUP_RIPPLE),
      },
      direction: {
        ...FLEX_META.Flex.props.flexDirection,
        options: ACTION_GROUP_DIRECTION,
        defaultValue: String(DEFAULT_ACTION_GROUP_DIRECTION),
        isResponsive: false,
      },
      gap: {
        ...FLEX_META.Flex.props.gap,
        options: ACTION_GROUP_GAP,
        defaultValue: String(DEFAULT_ACTION_GROUP_GAP),
        isResponsive: false,
      },
      attached: {
        group: PROP_GROUPS.APPEARANCE,
        options: ACTION_GROUP_ATTACHED,
        description:
          'Removes radius on the specified edge and applies the internal seam spacing needed to visually connect adjacent surfaces.',
      },
      children: {
        ...FLEX_META.Flex.props.children,
        isRequired: true,
        description: 'ActionGroup.Item slots.',
      },
      tagRef: FLEX_META.Flex.props.tagRef,
      tagAttrs: FLEX_META.Flex.props.tagAttrs,
    },
    examples: [
      {
        description: 'Actions arranged in a horizontal flow.',
        jsx: (
          <ActionGroup>
            <ActionGroup.Item>
              <Box margin="sm">
                <Text textAlign="center">Item 1</Text>
              </Box>
            </ActionGroup.Item>
            <ActionGroup.Item>
              <Box margin="sm">
                <Text textAlign="center">Item 2</Text>
              </Box>
            </ActionGroup.Item>
            <ActionGroup.Item>
              <Box margin="sm">
                <Text textAlign="center">Item 3</Text>
              </Box>
            </ActionGroup.Item>
            <ActionGroup.Item>
              <Box margin="sm">
                <Text textAlign="center">Item 4</Text>
              </Box>
            </ActionGroup.Item>
          </ActionGroup>
        ),
      },
      {
        description: 'Actions arranged in a vertical flow.',
        jsx: (
          <ActionGroup direction="column">
            <ActionGroup.Item>
              <Box margin="sm">
                <Text textAlign="center">Item 1</Text>
              </Box>
            </ActionGroup.Item>
            <ActionGroup.Item>
              <Box margin="sm">
                <Text textAlign="center">Item 2</Text>
              </Box>
            </ActionGroup.Item>
            <ActionGroup.Item>
              <Box margin="sm">
                <Text textAlign="center">Item 3</Text>
              </Box>
            </ActionGroup.Item>
            <ActionGroup.Item>
              <Box margin="sm">
                <Text textAlign="center">Item 4</Text>
              </Box>
            </ActionGroup.Item>
          </ActionGroup>
        ),
      },
    ],
    changelog: {
      '0.11.0': ['released'],
    },
  } satisfies ComponentMeta<ActionGroupProps>,
  ActionGroupItem: {
    overview: {
      bundle: 'pro',
      name: 'ActionGroup.Item',
      title: 'Define an interactive action.',
      description:
        'ActionGroup.Item represents an individual action within an ActionGroup. It provides an interactive surface that can display arbitrary content and participate in navigation, selection and group styling.',
      features: ['can be rendered as a button or link', 'supports selected and disabled states'],
      composedOf: ['Flex.Item'],
      topLevelTags: ACTION_GROUP_ITEM_TAGS,
    },
    props: {
      selected: {
        group: PROP_GROUPS.INTERACTION,
        options: ['boolean'],
        description: 'Marks the item as selected and applies the corresponding selected surface styling.',
      },
      disabled: FLEX_META.FlexItem.props.disabled,
      children: {
        ...FLEX_META.FlexItem.props.children,
        isRequired: true,
      },
      tag: {
        ...FLEX_META.FlexItem.props.tag,
        options: ACTION_GROUP_ITEM_TAGS,
        defaultValue: DEFAULT_ACTION_GROUP_ITEM_TAG,
      },
      tagRef: FLEX_META.FlexItem.props.tagRef,
      tagAttrs: FLEX_META.FlexItem.props.tagAttrs,
      onClick: {
        group: PROP_GROUPS.ROOT,
        options: ['e => void'],
        description: 'Click event handler for the Item slot.',
      },
    },
  } satisfies ComponentMeta<ActionGroupItemProps>,
}
