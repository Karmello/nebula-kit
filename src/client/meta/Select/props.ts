import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_SELECT_INLINE_SIZE,
  DEFAULT_SELECT_INTENT,
  DEFAULT_SELECT_VARIANT,
  DEFAULT_SELECT_VISIBLE_ITEMS_COUNT,
  SELECT_VARIANTS,
} from 'lib/components/core/Select/constants'
import { DEFAULT_TSHIRT_SIZE, TSHIRT_SIZES } from 'lib/constants'
import { SelectProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const SELECT_PROPS: Record<keyof SelectProps, DocProp> = {
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
    defaultValue: String(DEFAULT_SELECT_VISIBLE_ITEMS_COUNT),
    description: 'Specifies the number of list items visible before scrolling is enabled.',
  },
}
