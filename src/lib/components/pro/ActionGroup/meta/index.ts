import { BOX_META } from 'lib/components/core/Box/meta'
import { ComponentMeta } from 'client/definitions'

import {
  ACTION_GROUP_ATTACH,
  ACTION_GROUP_DIRECTION,
  DEFAULT_ACTION_GROUP_DIRECTION,
  DEFAULT_ACTION_GROUP_INTENT,
  DEFAULT_ACTION_GROUP_RIPPLE,
} from '../constants'
import {
  ACTION_GROUP_ITEM_TAGS,
  ActionGroupItemProps,
  DEFAULT_ACTION_GROUP_ITEM_TAG,
} from '../slots'
import { ActionGroupProps } from '../types'
import { ACTION_GROUP_CHANGELOG } from './changelog'
import { ACTION_GROUP_EXAMPLES } from './examples'

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
      composedOf: ['Box'],
      exposedTags: ['div'],
      slots: ['ActionGroup.Item'],
    },
    props: {
      attach: {
        options: ACTION_GROUP_ATTACH,
        description:
          'Removes radius on the specified edge and applies the internal seam spacing needed to visually connect adjacent surfaces.',
      },
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
        description: 'ActionGroup.Item slots.',
      },
      color: BOX_META.Box.props.color,
      direction: {
        ...BOX_META.Box.props.flexDirection,
        options: ACTION_GROUP_DIRECTION,
        defaultValue: String(DEFAULT_ACTION_GROUP_DIRECTION),
        isResponsive: false,
      },
      elevated: BOX_META.Box.props.elevated,
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_ACTION_GROUP_INTENT),
      },
      ripple: {
        ...BOX_META.Box.props.ripple,
        defaultValue: String(DEFAULT_ACTION_GROUP_RIPPLE),
      },
      stretch: {
        options: ['boolean'],
        description: 'Whether items should stretch to evenly fill the available inline space.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: ACTION_GROUP_EXAMPLES,
    changelog: ACTION_GROUP_CHANGELOG,
  } satisfies ComponentMeta<ActionGroupProps>,
  ActionGroupItem: {
    overview: {
      bundle: 'pro',
      name: 'ActionGroup.Item',
      title: 'Define an interactive action.',
      description:
        'ActionGroup.Item represents an individual action within an ActionGroup. It provides an interactive surface that can display arbitrary content and participate in navigation, selection and group styling.',
      features: ['can be rendered as a button or link', 'supports selected and disabled states'],
      composedOf: ['Box'],
      exposedTags: ACTION_GROUP_ITEM_TAGS,
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      disabled: BOX_META.Box.props.disabled,
      onClick: {
        options: ['e => void'],
        description: 'Click event handler for the Item slot.',
      },
      selected: {
        options: ['boolean'],
        description:
          'Marks the item as selected and applies the corresponding selected surface styling.',
      },
      tag: {
        ...BOX_META.Box.props.tag,
        options: ACTION_GROUP_ITEM_TAGS,
        defaultValue: DEFAULT_ACTION_GROUP_ITEM_TAG,
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
  } satisfies ComponentMeta<ActionGroupItemProps>,
}
