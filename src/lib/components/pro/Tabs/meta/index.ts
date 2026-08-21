import { BOX_META } from 'lib/components/core/Box/meta'
import { TSHIRT_SIZES } from 'lib/constants'
import { TabsPanelProps, TabsProps, TabsTabProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { ACTION_GROUP_META } from '../../ActionGroup/meta'
import {
  DEFAULT_TABS_DIRECTION,
  DEFAULT_TABS_INTENT,
  DEFAULT_TABS_SIZE,
  TABS_DIRECTION,
} from '../definitions'
import { TABS_CHANGELOG } from './changelog'
import { TABS_EXAMPLES } from './examples'

export const TABS_META = {
  Tabs: {
    overview: {
      bundle: 'pro',
      title: 'Control for switching between related content sections.',
      features: [
        'switches between mutually exclusive content panels',
        'supports horizontal and vertical layouts',
        'fully keyboard-operable with predictable focus behavior',
        'manages selection state without unmounting content',
      ],
      composedOf: ['Box', 'Flex', 'ActionGroup'],
      exposedTags: ['div'],
      slots: ['Tabs.Tab', 'Tabs.Panel'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        options: ['Tabs.Tab', 'Tabs.Panel'],
        isRequired: true,
        description: 'Available slots.',
      },
      color: {
        ...BOX_META.Box.props.color,
        isResponsive: false,
      },
      defaultValue: {
        options: ['string', 'number'],
        description: 'Sets the initial active tab in uncontrolled mode.',
      },
      direction: {
        options: TABS_DIRECTION,
        defaultValue: DEFAULT_TABS_DIRECTION,
        description: 'Sets whether tab items are arranged horizontally or vertically.',
      },
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: DEFAULT_TABS_INTENT,
        isResponsive: false,
      },
      onChange: {
        options: ['(value: string | number) => void'],
        description: 'Called when the active tab value changes.',
      },
      size: {
        options: TSHIRT_SIZES,
        defaultValue: DEFAULT_TABS_SIZE,
        description: 'Sets the size of the tab items.',
      },
      stretch: ACTION_GROUP_META.ActionGroup.props.stretch,
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      value: {
        options: ['string', 'number'],
        description: 'Controls the active tab value.',
      },
    },
    examples: TABS_EXAMPLES,
    changelog: TABS_CHANGELOG,
  } satisfies ComponentMeta<TabsProps>,
  TabsTab: {
    overview: {
      bundle: 'pro',
      name: 'Tabs.Tab',
      title: 'Selectable tab item within a Tabs component.',
      features: [
        'activates the panel with the matching value',
        'inherits visual styling from Button',
      ],
      composedOf: ['ActionGroup.Item', 'Flex', 'Text'],
      exposedTags: ['button'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      disabled: ACTION_GROUP_META.ActionGroupItem.props.disabled,
      minInlineSize: {
        ...BOX_META.Box.props.minInlineSize,
        isResponsive: false,
      },
      value: {
        options: ['string', 'number'],
        isRequired: true,
        description: 'Value that identifies the tab and links it to its panel.',
      },
    },
  } satisfies ComponentMeta<TabsTabProps>,
  TabsPanel: {
    overview: {
      bundle: 'pro',
      name: 'Tabs.Panel',
      title: 'Content panel associated with a tab.',
      features: ['displayed when its corresponding tab is active'],
      composedOf: ['Box'],
      exposedTags: ['div'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      value: {
        options: ['string', 'number'],
        isRequired: true,
        description: 'Value that identifies the panel and links it to a tab.',
      },
    },
  } satisfies ComponentMeta<TabsPanelProps>,
}
