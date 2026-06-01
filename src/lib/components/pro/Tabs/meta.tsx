import { ComponentMeta } from 'client/definitions'

import {
  type TabsPanelProps,
  type TabsTabProps,
  type TabsProps,
  TABS_ORIENTATION,
  DEFAULT_TABS_ORIENTATION,
  TABS_VARIANTS,
  DEFAULT_TABS_VARIANT,
  Tabs,
} from './'

import BOX_META from './../../core/Box/meta'
import BUTTON_META from './../../core/Button/meta'

export default {
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
      composedOf: ['Box', 'Flex', 'Segment'],
      topLevelTags: ['div'],
      slots: ['Tabs.Tab', 'Tabs.Panel'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        options: ['Tabs.Tab', 'Tabs.Panel'],
        isRequired: true,
        description: 'Available slots.',
      },
      color: BOX_META.Box.props.color,
      defaultValue: {
        options: ['string', 'number'],
        description: 'Sets the initial active tab in uncontrolled mode.',
      },
      inlineSize: BOX_META.Box.props.inlineSize,
      intent: BOX_META.Box.props.intent,
      onChange: {
        options: ['(value: string | number) => void'],
        description: 'Called when the active tab value changes.',
      },
      orientation: {
        options: TABS_ORIENTATION,
        defaultValue: DEFAULT_TABS_ORIENTATION,
        description: 'Sets whether tab items are arranged horizontally or vertically.',
      },
      size: {
        ...BUTTON_META.Button.props.size,
        description: 'Sets the size of the tab items.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      value: {
        options: ['string', 'number'],
        description: 'Controls the active tab value.',
      },
      variant: {
        ...BOX_META.Box.props.variant,
        options: TABS_VARIANTS,
        defaultValue: String(DEFAULT_TABS_VARIANT),
      },
    },
    examples: [
      {
        skip: true,
        jsx: (
          <Tabs>
            <Tabs.Tab value={1}>First</Tabs.Tab>
            <Tabs.Tab value={2}>Second</Tabs.Tab>
            <Tabs.Tab value={3}>Third</Tabs.Tab>
            <Tabs.Panel value={1}>This is the first tab content.</Tabs.Panel>
            <Tabs.Panel value={2}>This is the second tab content.</Tabs.Panel>
            <Tabs.Panel value={3}>This is the third tab content.</Tabs.Panel>
          </Tabs>
        ),
      },
      {
        description: 'Horizontal tab arrangement with the outline variant.',
        jsx: (
          <Tabs inlineSize="100%">
            <Tabs.Tab value={1} inlineSize="100px">
              First
            </Tabs.Tab>
            <Tabs.Tab value={2} inlineSize="100px">
              Second
            </Tabs.Tab>
            <Tabs.Tab value={3} inlineSize="100px">
              Third
            </Tabs.Tab>
            <Tabs.Tab value={4} inlineSize="100px">
              Fourth
            </Tabs.Tab>
            <Tabs.Tab value={5} inlineSize="100px">
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
        description: 'Vertical tab arrangement with the outline variant.',
        jsx: (
          <Tabs inlineSize="100%" orientation="vertical">
            <Tabs.Tab value={1} inlineSize="110px">
              First
            </Tabs.Tab>
            <Tabs.Tab value={2}>Second</Tabs.Tab>
            <Tabs.Tab value={3}>Third</Tabs.Tab>
            <Tabs.Tab value={4}>Fourth</Tabs.Tab>
            <Tabs.Tab value={5}>Fifth</Tabs.Tab>
            <Tabs.Panel value={1}>This is the first tab content.</Tabs.Panel>
            <Tabs.Panel value={2}>This is the second tab content.</Tabs.Panel>
            <Tabs.Panel value={3}>This is the third tab content.</Tabs.Panel>
            <Tabs.Panel value={4}>This is the fourth tab content.</Tabs.Panel>
            <Tabs.Panel value={5}>This is the fifth tab content.</Tabs.Panel>
          </Tabs>
        ),
      },
      {
        description: 'Horizontal tab arrangement with the solid variant.',
        jsx: (
          <Tabs variant="solid" inlineSize="100%">
            <Tabs.Tab value={1} inlineSize="100px">
              First
            </Tabs.Tab>
            <Tabs.Tab value={2} inlineSize="100px">
              Second
            </Tabs.Tab>
            <Tabs.Tab value={3} inlineSize="100px">
              Third
            </Tabs.Tab>
            <Tabs.Tab value={4} inlineSize="100px">
              Fourth
            </Tabs.Tab>
            <Tabs.Tab value={5} inlineSize="100px">
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
        description: 'Vertical tab arrangement with the solid variant.',
        jsx: (
          <Tabs variant="solid" inlineSize="100%" orientation="vertical">
            <Tabs.Tab value={1} inlineSize="110px">
              First
            </Tabs.Tab>
            <Tabs.Tab value={2}>Second</Tabs.Tab>
            <Tabs.Tab value={3}>Third</Tabs.Tab>
            <Tabs.Tab value={4}>Fourth</Tabs.Tab>
            <Tabs.Tab value={5}>Fifth</Tabs.Tab>
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
      '0.10.0': ['changed `flexDirection` prop to `orientation`'],
      '0.3.0': ['released'],
    },
  } as ComponentMeta<TabsProps>,
  TabsTab: {
    overview: {
      bundle: 'pro',
      name: 'Tabs.Tab',
      title: 'Selectable tab item within a Tabs component.',
      features: ['activates the panel with the matching value', 'inherits visual styling from Button'],
      composedOf: ['Button'],
      topLevelTags: ['button'],
    },
    props: {
      align: BUTTON_META.Button.props.align,
      children: {
        ...BUTTON_META.Button.props.children,
        isRequired: true,
      },
      customSvgIcon: BUTTON_META.Button.props.customSvgIcon,
      disabled: BUTTON_META.Button.props.disabled,
      iconName: BUTTON_META.Button.props.iconName,
      iconPlacement: BUTTON_META.Button.props.iconPlacement,
      inlineSize: BUTTON_META.Button.props.inlineSize,
      tagAttrs: BUTTON_META.Button.props.tagAttrs,
      tagRef: BUTTON_META.Button.props.tagRef,
      value: {
        options: ['string', 'number'],
        isRequired: true,
        description: 'Value that identifies the tab and links it to its panel.',
      },
    },
  } as ComponentMeta<TabsTabProps>,
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
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      value: {
        options: ['string', 'number'],
        isRequired: true,
        description: 'Value that identifies the panel and links it to a tab.',
      },
    },
  } as ComponentMeta<TabsPanelProps>,
}
