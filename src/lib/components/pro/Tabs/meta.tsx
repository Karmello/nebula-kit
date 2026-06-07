import { BOX_META } from 'lib/components/core/Box/meta'
import { FLEX_META } from 'lib/components/core/Flex/meta'
import { CONTROL_SIZES, PROP_GROUPS } from 'lib/constants'
import { Tabs, TabsPanelProps, TabsProps, TabsTabProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { ACTION_GROUP_META } from '../ActionGroup/meta'
import { DEFAULT_TABS_DIRECTION, DEFAULT_TABS_INTENT, DEFAULT_TABS_SIZE, TABS_DIRECTION } from './definitions'

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
      topLevelTags: ['div'],
      slots: ['Tabs.Tab', 'Tabs.Panel'],
    },
    props: {
      color: {
        ...BOX_META.Box.props.color,
        isResponsive: false,
      },
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: DEFAULT_TABS_INTENT,
        isResponsive: false,
      },
      direction: {
        group: PROP_GROUPS.LAYOUT,
        options: TABS_DIRECTION,
        defaultValue: DEFAULT_TABS_DIRECTION,
        description: 'Sets whether tab items are arranged horizontally or vertically.',
      },
      stretch: ACTION_GROUP_META.ActionGroup.props.stretch,
      size: {
        group: PROP_GROUPS.SIZE,
        options: CONTROL_SIZES,
        defaultValue: DEFAULT_TABS_SIZE,
        description: 'Sets the size of the tab items.',
      },
      value: {
        group: PROP_GROUPS.STATE,
        options: ['string', 'number'],
        description: 'Controls the active tab value.',
      },
      defaultValue: {
        group: PROP_GROUPS.STATE,
        options: ['string', 'number'],
        description: 'Sets the initial active tab in uncontrolled mode.',
      },
      onChange: {
        group: PROP_GROUPS.STATE,
        options: ['(value: string | number) => void'],
        description: 'Called when the active tab value changes.',
      },
      children: {
        ...BOX_META.Box.props.children,
        options: ['Tabs.Tab', 'Tabs.Panel'],
        isRequired: true,
        description: 'Available slots.',
      },
      tagRef: BOX_META.Box.props.tagRef,
      tagAttrs: BOX_META.Box.props.tagAttrs,
    },
    examples: [
      {
        skip: true,
        jsx: (
          <Tabs>
            <Tabs.Tab value={1} minInlineSize="100px">
              First
            </Tabs.Tab>
            <Tabs.Tab value={2} minInlineSize="100px">
              Second
            </Tabs.Tab>
            <Tabs.Tab value={3} minInlineSize="100px">
              Third
            </Tabs.Tab>
            <Tabs.Panel value={1}>This is the first tab content.</Tabs.Panel>
            <Tabs.Panel value={2}>This is the second tab content.</Tabs.Panel>
            <Tabs.Panel value={3}>This is the third tab content.</Tabs.Panel>
          </Tabs>
        ),
      },
      {
        description: 'Horizontal tab arrangement.',
        jsx: (
          <Tabs>
            <Tabs.Tab value={1} minInlineSize="100px">
              First
            </Tabs.Tab>
            <Tabs.Tab value={2} minInlineSize="100px">
              Second
            </Tabs.Tab>
            <Tabs.Tab value={3} minInlineSize="100px">
              Third
            </Tabs.Tab>
            <Tabs.Tab value={4} minInlineSize="100px">
              Fourth
            </Tabs.Tab>
            <Tabs.Tab value={5} minInlineSize="100px">
              Fifth
            </Tabs.Tab>
            <Tabs.Panel value={1}>This is the first tab content.</Tabs.Panel>
            <Tabs.Panel value={2}>This is the second tab content.</Tabs.Panel>
            <Tabs.Panel value={3}>This is the third tab content.</Tabs.Panel>
            <Tabs.Panel value={4}>This is the fourth tab content.</Tabs.Panel>
            <Tabs.Panel value={5}>This is the fifth tab content.</Tabs.Panel>
          </Tabs>
        ),
      },
      {
        description: 'Horizontal tab arrangement with stretched tabs.',
        jsx: (
          <Tabs stretch>
            <Tabs.Tab value={1} minInlineSize="100px">
              First
            </Tabs.Tab>
            <Tabs.Tab value={2} minInlineSize="100px">
              Second
            </Tabs.Tab>
            <Tabs.Tab value={3} minInlineSize="100px">
              Third
            </Tabs.Tab>
            <Tabs.Tab value={4} minInlineSize="100px">
              Fourth
            </Tabs.Tab>
            <Tabs.Tab value={5} minInlineSize="100px">
              Fifth
            </Tabs.Tab>
            <Tabs.Panel value={1}>This is the first tab content.</Tabs.Panel>
            <Tabs.Panel value={2}>This is the second tab content.</Tabs.Panel>
            <Tabs.Panel value={3}>This is the third tab content.</Tabs.Panel>
            <Tabs.Panel value={4}>This is the fourth tab content.</Tabs.Panel>
            <Tabs.Panel value={5}>This is the fifth tab content.</Tabs.Panel>
          </Tabs>
        ),
      },
      {
        description: 'Vertical tab arrangement.',
        jsx: (
          <Tabs direction="column">
            <Tabs.Tab value={1} minInlineSize="100px">
              First
            </Tabs.Tab>
            <Tabs.Tab value={2} minInlineSize="100px">
              Second
            </Tabs.Tab>
            <Tabs.Tab value={3} minInlineSize="100px">
              Third
            </Tabs.Tab>
            <Tabs.Tab value={4} minInlineSize="100px">
              Fourth
            </Tabs.Tab>
            <Tabs.Tab value={5} minInlineSize="100px">
              Fifth
            </Tabs.Tab>
            <Tabs.Panel value={1}>This is the first tab content.</Tabs.Panel>
            <Tabs.Panel value={2}>This is the second tab content.</Tabs.Panel>
            <Tabs.Panel value={3}>This is the third tab content.</Tabs.Panel>
            <Tabs.Panel value={4}>This is the fourth tab content.</Tabs.Panel>
            <Tabs.Panel value={5}>This is the fifth tab content.</Tabs.Panel>
          </Tabs>
        ),
      },
    ],
    changelog: {
      '0.11.0': ['changed `orientation` prop to `direction`'],
      '0.10.0': ['changed `flexDirection` prop to `orientation`'],
      '0.3.0': ['released'],
    },
  } satisfies ComponentMeta<TabsProps>,
  TabsTab: {
    overview: {
      bundle: 'pro',
      name: 'Tabs.Tab',
      title: 'Selectable tab item within a Tabs component.',
      features: ['activates the panel with the matching value', 'inherits visual styling from Button'],
      composedOf: ['ActionGroup.Item', 'Flex', 'Text'],
      topLevelTags: ['button'],
    },
    props: {
      value: {
        group: PROP_GROUPS.STATE,
        options: ['string', 'number'],
        isRequired: true,
        description: 'Value that identifies the tab and links it to its panel.',
      },
      disabled: ACTION_GROUP_META.ActionGroupItem.props.disabled,
      minInlineSize: FLEX_META.Flex.props.minInlineSize,
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
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
      topLevelTags: ['div'],
    },
    props: {
      value: {
        group: PROP_GROUPS.STATE,
        options: ['string', 'number'],
        isRequired: true,
        description: 'Value that identifies the panel and links it to a tab.',
      },
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
    },
  } satisfies ComponentMeta<TabsPanelProps>,
}
