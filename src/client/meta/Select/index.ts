import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_SELECT_INLINE_SIZE,
  DEFAULT_SELECT_INTENT,
  DEFAULT_SELECT_VARIANT,
  SELECT_VARIANTS,
} from 'lib/components/core/Select/constants'
import { DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT } from 'lib/components/shared'
import { DEFAULT_TSHIRT_SIZE, TSHIRT_SIZES } from 'lib/constants'
import { SelectProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { SELECT_CHANGELOG } from './changelog'
import { SELECT_EXAMPLES } from './examples'

export const SELECT_META = {
  overview: {
    bundle: 'core',
    title: 'Form control for choosing a single option from a list.',
    description:
      'Select allows users to choose a single value from a predefined list of options while keeping the interface compact. It combines an interactive trigger with a dropdown list, handling selection, keyboard navigation, focus management and positioning automatically.',
    features: [
      'supports controlled and uncontrolled modes',
      'keyboard navigation with arrow keys',
      'automatic option scrolling to the selected item',
      'automatic dropdown positioning and viewport collision handling',
      'click outside and Escape key dismissal',
      'supports fixed trigger labels via `staticLabel`',
    ],
    composedOf: ['Box', 'Text', 'Title'],
    slots: ['Select.Option'],
  },
  props: {
    children: {
      options: ['Select.Option'],
      isRequired: true,
      description: 'Option slots rendered.',
    },
    color: {
      options: BOX_COLORS,
      description: 'Color applied to the component.',
    },
    defaultValue: {
      options: ['string'],
      description: 'Initial selected item value when the component is used in uncontrolled mode.',
    },
    disabled: BOX_META.props.disabled,
    inlineSize: {
      options: BOX_META.props.inlineSize.options,
      defaultValue: String(DEFAULT_SELECT_INLINE_SIZE),
      isResponsive: true,
      description: BOX_META.props.inlineSize.description,
    },
    intent: {
      options: BOX_INTENTS,
      defaultValue: DEFAULT_SELECT_INTENT,
      description: BOX_META.props.intent.description,
    },
    onChange: {
      options: ['(value: string) => void'],
      description: 'Callback fired when the selected value changes.',
    },
    size: {
      options: TSHIRT_SIZES,
      defaultValue: DEFAULT_TSHIRT_SIZE,
      description:
        'Controls overall proportions - adjusting trigger and list item sizing to keep the dropdown visually balanced at each size.',
    },
    staticLabel: {
      options: ['string'],
      description:
        'Displays a fixed label instead of the selected value. Useful for navigation-style selects where the trigger text should stay constant.',
    },
    value: {
      options: ['string'],
      description: 'Current selected item value when the component is used in controlled mode.',
    },
    variant: {
      options: SELECT_VARIANTS,
      defaultValue: DEFAULT_SELECT_VARIANT,
      description: BOX_META.props.variant.description,
    },
    visibleItemsCount: {
      options: ['number'],
      defaultValue: String(DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT),
      description: 'Specifies the number of list items visible before scrolling is enabled.',
    },
  },
  examples: SELECT_EXAMPLES,
  changelog: SELECT_CHANGELOG,
} satisfies ComponentMeta<SelectProps>
