import { COLORS, CONTROL_SIZES, DEFAULT_CONTROL_SIZE } from 'lib/constants'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT } from '../../shared/DropdownList'
import { ACTION_SURFACE_META } from '../ActionSurface/meta'
import { BOX_INTENTS } from '../Box/constants'
import { BOX_META } from '../Box/meta'
import { DEFAULT_SELECT_INLINE_SIZE, DEFAULT_SELECT_INTENT, DEFAULT_SELECT_VARIANT, Select, SELECT_VARIANTS } from './'
import { SelectOptionProps } from './SelectOption'
import { type SelectProps } from './types'

export const SELECT_META = {
  Select: {
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
      composedOf: ['ActionSurface', 'Box', 'Text', 'Flex', 'WithIcon'],
      slots: ['Select.Option'],
    },
    props: {
      children: {
        options: ['Select.Option'],
        isRequired: true,
        description: 'Option slots rendered.',
      },
      color: {
        options: COLORS,
        description: 'Color applied to the component.',
      },
      defaultValue: {
        options: ['string'],
        description: 'Initial selected item value when the component is used in uncontrolled mode.',
      },
      disabled: BOX_META.Box.props.disabled,
      inlineSize: {
        options: BOX_META.Box.props.inlineSize.options,
        defaultValue: String(DEFAULT_SELECT_INLINE_SIZE),
        isResponsive: true,
        description: BOX_META.Box.props.inlineSize.description,
      },
      intent: {
        options: BOX_INTENTS,
        defaultValue: DEFAULT_SELECT_INTENT,
        description: BOX_META.Box.props.intent.description,
      },
      onChange: {
        options: ['(value: string) => void'],
        description: 'Callback fired when the selected value changes.',
      },
      size: {
        options: CONTROL_SIZES,
        defaultValue: DEFAULT_CONTROL_SIZE,
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
        description: BOX_META.Box.props.variant.description,
      },
      visibleItemsCount: {
        options: ['number'],
        defaultValue: String(DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT),
        description: 'Specifies the number of list items visible before scrolling is enabled.',
      },
    },
    examples: [
      {
        description: 'Select used in uncontrolled mode with its initial value set via the "defaultValue" prop.',
        jsx: (
          <Select defaultValue="option-1">
            <Select.Option value="option-1">Option 1</Select.Option>
            <Select.Option value="option-2">Option 2</Select.Option>
            <Select.Option value="option-3">Option 3</Select.Option>
          </Select>
        ),
      },
      {
        description: 'Select rendered with a custom inline size.',
        jsx: (
          <Select defaultValue="option-1" inlineSize="200px">
            <Select.Option value="option-1">Option 1</Select.Option>
            <Select.Option value="option-2">Option 2</Select.Option>
            <Select.Option value="option-3">Option 3</Select.Option>
          </Select>
        ),
      },
      {
        description: 'Disabled Select.',
        jsx: (
          <Select defaultValue="option-1" inlineSize="200px" disabled>
            <Select.Option value="option-1">Option 1</Select.Option>
            <Select.Option value="option-2">Option 2</Select.Option>
            <Select.Option value="option-3">Option 3</Select.Option>
          </Select>
        ),
      },
    ],
    changelog: {
      '0.7.0': ['replaced `triggerIntent` and `listIntent` with a single `intent` prop'],
      '0.6.0': ['replaced `intent` with separate `triggerIntent` and `listIntent` props'],
      '0.5.0': ['removed `onClosed` prop'],
      '0.3.0': ['updated public API'],
      '0.2.3': ['released'],
    },
  } as ComponentMeta<SelectProps>,
  SelectOption: {
    overview: {
      bundle: 'core',
      name: 'Select.Option',
      title: 'Represents a selectable item within a Select dropdown list.',
      description:
        'Select.Option defines an available choice within a Select component. Each option provides a value used for selection and renders the content displayed to the user inside the dropdown list.',
      composedOf: ['ActionSurface', 'Text', 'Divider'],
      topLevelTags: ['button'],
    },
    props: {
      children: ACTION_SURFACE_META.ActionSurface.props.children,
      value: {
        options: ['string'],
        isRequired: true,
        description: 'Defines value for the option.',
      },
    },
  } as ComponentMeta<SelectOptionProps>,
}
