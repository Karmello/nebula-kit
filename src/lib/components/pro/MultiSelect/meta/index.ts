import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import { BOX_META } from 'lib/components/core/Box/meta'
import {
  DEFAULT_DROPDOWN_LIST_PLACEMENT,
  DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
  DROPDOWN_LIST_PLACEMENTS,
  DROPDOWN_LIST_SCROLL_ALIGN,
} from 'lib/components/shared'
import { DEFAULT_TSHIRT_SIZE, TSHIRT_SIZES } from 'lib/constants'
import { MultiSelectOptionProps, MultiSelectProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_MULTI_SELECT_INLINE_SIZE } from '../definitions'
import { MULTI_SELECT_CHANGELOG } from './changelog'
import { MULTI_SELECT_EXAMPLES } from './examples'

export const MULTI_SELECT_META = {
  MultiSelect: {
    overview: {
      bundle: 'pro',
      title: 'Form control for choosing multiple options from a list.',
      features: ['supports both controlled and uncontrolled modes'],
      composedOf: ['Text', 'Title'],
      exposedTags: ['div'],
      slots: ['MultiSelect.Option'],
    },
    props: {
      children: {
        options: ['MultiSelect.Option'],
        isRequired: true,
        description: 'Option slots rendered.',
      },
      color: {
        options: BOX_COLORS,
        description: 'Color applied to the component.',
      },
      defaultValue: {
        options: ['string[]'],
        description:
          'Initial set of selected values when the component is used in uncontrolled mode.',
      },
      disabled: BOX_META.Box.props.disabled,
      dropdownPlacement: {
        options: DROPDOWN_LIST_PLACEMENTS,
        defaultValue: DEFAULT_DROPDOWN_LIST_PLACEMENT,
        description:
          'Defines the preferred placement of the dropdown relative to the trigger. The final placement may be adjusted automatically to keep the list visible.',
      },
      inlineSize: {
        ...BOX_META.Box.props.inlineSize,
        defaultValue: String(DEFAULT_MULTI_SELECT_INLINE_SIZE),
      },
      intent: {
        options: BOX_INTENTS,
        description: 'Color tone applied to the component.',
      },
      onChange: {
        options: ['(value: string[]) => void'],
        description: 'Callback fired when the set of selected values changes.',
      },
      scrollAlign: {
        options: DROPDOWN_LIST_SCROLL_ALIGN,
        defaultValue: DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
        description: 'Defines how the selected option is positioned within the scroll area.',
      },
      size: {
        options: TSHIRT_SIZES,
        defaultValue: DEFAULT_TSHIRT_SIZE,
        description:
          'Controls overall proportions - adjusting trigger and list item sizing to keep the dropdown visually balanced at each size.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      value: {
        options: ['string[]'],
        description:
          'Current set of selected values when the component is used in controlled mode.',
      },
      visibleItemsCount: {
        options: ['number'],
        defaultValue: String(DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT),
        description: 'Specifies the number of list items visible before scrolling is enabled.',
      },
    },
    examples: MULTI_SELECT_EXAMPLES,
    changelog: MULTI_SELECT_CHANGELOG,
  } satisfies ComponentMeta<MultiSelectProps>,
  MultiSelectOption: {
    overview: {
      bundle: 'pro',
      name: 'MultiSelect.Option',
      title: 'Represents a single option within MultiSelect component.',
      composedOf: ['DropdownList.Item'],
      exposedTags: ['button'],
    },
    props: {
      children: BOX_META.Box.props.children,
      value: {
        options: ['string'],
        isRequired: true,
        description: 'Defines value for the option.',
      },
    },
  } satisfies ComponentMeta<MultiSelectOptionProps>,
}
