import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import { BREADCRUMB_TAGS, DEFAULT_BREADCRUMB_INTENT } from 'lib/components/pro/Breadcrumb/constants'
import { DEFAULT_TSHIRT_SIZE, TSHIRT_SIZES } from 'lib/constants'
import { BreadcrumbProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { BREADCRUMB_CHANGELOG } from './changelog'
import { BREADCRUMB_EXAMPLES } from './examples'

export const BREADCRUMB_META = {
  Breadcrumb: {
    overview: {
      bundle: 'pro',
      title:
        'Interactive hierarchical navigation control for selecting and modifying a position within a structured path.',
      features: [
        'displays a hierarchical path using interactive DropdownList components',
        'reveals navigation levels progressively based on user selection',
        'emits explicit user intent without guessing defaults or completing paths',
        'supports both uncontrolled and fully controlled usage patterns',
        'integrates cleanly with routing, configuration and non-routing flows',
        'keeps application logic and navigation policy outside the component',
      ],
      composedOf: ['Box', 'Icon', 'Text'],
      exposedTags: ['div', 'nav', 'section'],
    },
    props: {
      color: {
        options: BOX_COLORS,
        description: 'Color applied to the component.',
      },
      defaultPath: {
        options: ['string[]'],
        description:
          'Initial breadcrumb path applied once to seed internal state when the component is uncontrolled.',
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
        options: TSHIRT_SIZES,
        defaultValue: DEFAULT_TSHIRT_SIZE,
      },
      tag: {
        ...BOX_META.Box.props.tag,
        options: BREADCRUMB_TAGS,
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      tree: {
        options: ['object[]'],
        isRequired: true,
        description:
          'Hierarchical data source that defines the breadcrumb structure and available selections.',
      },
    },
    examples: BREADCRUMB_EXAMPLES,
    changelog: BREADCRUMB_CHANGELOG,
  } satisfies ComponentMeta<BreadcrumbProps>,
}
