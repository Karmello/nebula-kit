import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_MULTI_SELECT_INLINE_SIZE,
  DEFAULT_MULTI_SELECT_INTENT,
  DEFAULT_MULTI_SELECT_VARIANT,
  DEFAULT_MULTI_SELECT_VISIBLE_ITEMS_COUNT,
  MULTI_SELECT_VARIANTS,
} from 'lib/components/pro/MultiSelect/constants'
import { DEFAULT_TSHIRT_SIZE, TSHIRT_SIZES } from 'lib/constants'
import { MultiSelectProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

export const MULTI_SELECT_PROPS: Record<keyof MultiSelectProps, DocProp> = {
  children: {
    options: ['MultiSelect.Option'],
    isRequired: true,
    description: 'Option slots rendered.',
  },
  // value
  value: {
    options: ['string[]'],
    description: 'Current set of selected values when the component is used in controlled mode.',
    group: 'value',
  },
  defaultValue: {
    options: ['string[]'],
    description: 'Initial set of selected values when the component is used in uncontrolled mode.',
    group: 'value',
  },
  onChange: {
    options: ['(value: string[]) => void'],
    description: 'Callback fired when the set of selected values changes.',
    group: 'value',
  },
  // content
  staticLabel: {
    options: ['string'],
    description:
      'Displays a fixed label instead of the selected values. Useful for navigation-style selects where the trigger text should stay constant.',
    group: 'content',
  },
  visibleItemsCount: {
    options: ['number'],
    defaultValue: String(DEFAULT_MULTI_SELECT_VISIBLE_ITEMS_COUNT),
    description: 'Specifies the number of list items visible before scrolling is enabled.',
    group: 'content',
  },
  // surface
  variant: {
    options: MULTI_SELECT_VARIANTS,
    defaultValue: DEFAULT_MULTI_SELECT_VARIANT,
    description: 'Visual style variant.',
    group: 'surface',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: DEFAULT_MULTI_SELECT_INTENT,
    description: "Color tone applied to the component's main color.",
    group: 'surface',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
    group: 'surface',
  },
  // interaction
  disabled: {
    options: ['boolean'],
    description: 'Disables the component and its interactions.',
    group: 'interaction',
  },
  // size
  scale: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_TSHIRT_SIZE,
    description:
      'Controls overall proportions - adjusting trigger and list item sizing to keep the dropdown visually balanced at each size.',
    group: 'size',
  },
  inlineSize: {
    options: ['string'],
    defaultValue: String(DEFAULT_MULTI_SELECT_INLINE_SIZE),
    isResponsive: true,
    description: 'Logical width.',
    group: 'size',
  },
}
