import { BOX_INTENTS } from 'lib/components/core/Box'
import { BOX_META } from 'lib/components/core/Box/meta'
import {
  DEFAULT_DROPDOWN_LIST_PLACEMENT,
  DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
  DROPDOWN_LIST_PLACEMENTS,
  DROPDOWN_LIST_SCROLL_ALIGN,
} from 'lib/components/shared'
import { COLORS, CONTROL_SIZES, DEFAULT_CONTROL_SIZE } from 'lib/constants'
import { MultiSelect, MultiSelectProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_MULTI_SELECT_INLINE_SIZE } from './definitions'

export const MULTI_SELECT_META = {
  MultiSelect: {
    overview: {
      bundle: 'pro',
      title: 'Form control for choosing multiple options from a list.',
      features: ['supports both controlled and uncontrolled modes'],
      composedOf: ['Text', 'WithIcon'],
      topLevelTags: ['div'],
      slots: ['MultiSelect.Option'],
    },
    props: {
      children: {
        options: ['MultiSelect.Option'],
        isRequired: true,
        description: 'Option slots rendered.',
      },
      color: {
        options: COLORS,
        description: 'Color applied to the component.',
      },
      defaultValue: {
        options: ['string[]'],
        description: 'Initial set of selected values when the component is used in uncontrolled mode.',
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
        options: CONTROL_SIZES,
        defaultValue: DEFAULT_CONTROL_SIZE,
        description:
          'Controls overall proportions - adjusting trigger and list item sizing to keep the dropdown visually balanced at each size.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      value: {
        options: ['string[]'],
        description: 'Current set of selected values when the component is used in controlled mode.',
      },
      visibleItemsCount: {
        options: ['number'],
        defaultValue: String(DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT),
        description: 'Specifies the number of list items visible before scrolling is enabled.',
      },
    },
    examples: [
      {
        description: 'MultiSelect used in uncontrolled mode with its initial value set via the "defaultValue" prop.',
        jsx: (
          <MultiSelect defaultValue={['option-1']}>
            <MultiSelect.Option value="option-1">Option 1</MultiSelect.Option>
            <MultiSelect.Option value="option-2">Option 2</MultiSelect.Option>
            <MultiSelect.Option value="option-3">Option 3</MultiSelect.Option>
          </MultiSelect>
        ),
      },
      {
        description: 'MultiSelect rendered with a custom inline size.',
        jsx: (
          <MultiSelect defaultValue={['option-1']} inlineSize="200px">
            <MultiSelect.Option value="option-1">Option 1</MultiSelect.Option>
            <MultiSelect.Option value="option-2">Option 2</MultiSelect.Option>
            <MultiSelect.Option value="option-3">Option 3</MultiSelect.Option>
          </MultiSelect>
        ),
      },
      {
        description: 'Disabled MultiSelect.',
        jsx: (
          <MultiSelect defaultValue={['option-1']} inlineSize="200px" disabled>
            <MultiSelect.Option value="option-1">Option 1</MultiSelect.Option>
            <MultiSelect.Option value="option-2">Option 2</MultiSelect.Option>
            <MultiSelect.Option value="option-3">Option 3</MultiSelect.Option>
          </MultiSelect>
        ),
      },
    ],
    changelog: {
      '0.7.0': ['replaced `triggerIntent` and `listIntent` with a single `intent` prop'],
      '0.6.0': ['replaced `intent` with separate `triggerIntent` and `listIntent` props'],
      '0.3.0': ['released'],
    },
  } as ComponentMeta<MultiSelectProps>,
  MultiSelectOption: {
    overview: {
      bundle: 'pro',
      name: 'MultiSelect.Option',
      title: 'Represents a single option within MultiSelect component.',
      composedOf: ['DropdownList.Item'],
      topLevelTags: ['button'],
    },
    props: {
      children: BOX_META.Box.props.children,
      value: {
        options: ['string'],
        isRequired: true,
        description: 'Defines value for the option.',
      },
    },
  },
}
