import { ComponentMeta } from 'client/definitions'
import { COLORS, CONTROL_SIZES, DEFAULT_CONTROL_SIZE } from 'lib/definitions'

import { BREADCRUMB_TAGS, DEFAULT_BREADCRUMB_INTENT, type BreadcrumbProps } from './definitions'
import { BOX_INTENTS } from '../../core/Box/definitions'
import { Breadcrumb } from './breadcrumb'
import BOX_META from '../../core/Box/meta'

const tree = [
  {
    label: 'Electronics',
    value: 'electronics',
    children: [
      {
        label: 'Computers',
        value: 'computers',
        children: [
          { label: 'Laptops', value: 'laptops' },
          { label: 'Desktops', value: 'desktops' },
        ],
      },
      {
        label: 'Phones',
        value: 'phones',
        children: [
          { label: 'Smartphones', value: 'smartphones' },
          { label: 'Accessories', value: 'phone-accessories' },
        ],
      },
    ],
  },
  {
    label: 'Home & Living',
    value: 'home',
    children: [
      {
        label: 'Furniture',
        value: 'furniture',
        children: [
          { label: 'Sofas', value: 'sofas' },
          { label: 'Tables', value: 'tables' },
        ],
      },
      {
        label: 'Kitchen',
        value: 'kitchen',
        children: [
          { label: 'Cookware', value: 'cookware' },
          { label: 'Appliances', value: 'appliances' },
        ],
      },
    ],
  },
]

export default {
  Breadcrumb: {
    overview: {
      bundle: 'pro',
      title: 'Interactive hierarchical navigation control for selecting and modifying a position within a structured path.',
      features: [
        'displays a hierarchical path using interactive DropdownList components',
        'reveals navigation levels progressively based on user selection',
        'emits explicit user intent without guessing defaults or completing paths',
        'supports both uncontrolled and fully controlled usage patterns',
        'integrates cleanly with routing, configuration and non-routing flows',
        'keeps application logic and navigation policy outside the component',
      ],
      composedOf: ['Box', 'Flex', 'Icon', 'Text'],
      topLevelTags: ['div', 'nav', 'section'],
    },
    props: {
      color: {
        options: COLORS,
        description: 'Color applied to the component.',
      },
      defaultPath: {
        options: ['string[]'],
        description: 'Initial breadcrumb path applied once to seed internal state when the component is uncontrolled.',
      },
      intent: {
        options: BOX_INTENTS,
        defaultValue: String(DEFAULT_BREADCRUMB_INTENT),
        description: 'Color tone applied to the list.',
      },
      onChange: {
        options: ['(path: string[]) => void'],
        description: 'Called when the user selects a value, receiving the updated breadcrumb path.',
      },
      path: {
        options: ['string[]'],
        description: 'Controls the active breadcrumb path, enabling fully controlled behavior.',
      },
      size: {
        options: CONTROL_SIZES,
        defaultValue: DEFAULT_CONTROL_SIZE,
      },
      tag: {
        ...BOX_META.Box.props.tag,
        options: BREADCRUMB_TAGS as never,
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      tree: {
        options: ['object[]'],
        isRequired: true,
        description: 'Hierarchical data source that defines the breadcrumb structure and available selections.',
      },
    },
    examples: [
      {
        jsx: <Breadcrumb tree={tree} />,
        description:
          'Breadcrumb in uncontrolled mode, where selection state is managed internally and navigation levels are revealed progressively based on user interaction.',
        sandBoxWithNoPadding: true,
      },
    ],
    changelog: {
      '0.7.0': ['removed `itemBorderIntent` prop'],
      '0.6.0': ['added `itemBorderIntent` prop'],
      '0.2.3': ['released'],
    },
  } as ComponentMeta<BreadcrumbProps>,
}
