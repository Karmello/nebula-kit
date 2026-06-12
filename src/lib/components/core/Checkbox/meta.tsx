import { TSHIRT_SIZES } from 'lib/constants'
import { Checkbox, CheckboxProps, Flex } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import { CHECKBOX_VARIANTS, DEFAULT_CHECKBOX_INTENT, DEFAULT_CHECKBOX_SIZE, DEFAULT_CHECKBOX_VARIANT } from './definitions'

export const CHECKBOX_META = {
  Checkbox: {
    overview: {
      bundle: 'core',
      title: 'Form control for toggling a binary on/off state.',
      features: ['supports both controlled and uncontrolled modes'],
      composedOf: ['Box', 'Icon'],
      topLevelTags: ['div'],
    },
    props: {
      checked: {
        options: ['boolean'],
        description: 'Controls the checked state in controlled mode.',
      },
      color: BOX_META.Box.props.color,
      defaultChecked: {
        options: ['boolean'],
        description: 'Sets the initial checked state for uncontrolled usage.',
      },
      disabled: BOX_META.Box.props.disabled,
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_CHECKBOX_INTENT),
      },
      onChange: {
        options: ['(checked: boolean) => void'],
        description: 'Called when the checked state changes. Receives the new checked value.',
      },
      size: {
        options: TSHIRT_SIZES,
        defaultValue: DEFAULT_CHECKBOX_SIZE,
        description: 'Controls overall proportions, adjusting the checkbox and icon size.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      variant: {
        ...BOX_META.Box.props.variant,
        options: CHECKBOX_VARIANTS,
        defaultValue: String(DEFAULT_CHECKBOX_VARIANT),
      },
    },
    examples: [
      {
        code: '<Checkbox checked={checked} />',
        skip: true,
      },
      {
        description: 'Different checkbox sizes in the outline variant.',
        jsx: (
          <Flex gap="8px" alignItems="center">
            <Checkbox size="xs" variant="outline" />
            <Checkbox size="sm" variant="outline" />
            <Checkbox size="md" variant="outline" />
            <Checkbox size="lg" variant="outline" />
          </Flex>
        ),
      },
      {
        description: 'Different checkbox sizes in the soft-outline variant.',
        jsx: (
          <Flex gap="8px" alignItems="center">
            <Checkbox size="xs" variant="soft-outline" />
            <Checkbox size="sm" variant="soft-outline" />
            <Checkbox size="md" variant="soft-outline" />
            <Checkbox size="lg" variant="soft-outline" />
          </Flex>
        ),
      },
      {
        description: 'Different checkbox sizes in the solid variant.',
        jsx: (
          <Flex gap="8px" alignItems="center">
            <Checkbox size="xs" variant="solid" />
            <Checkbox size="sm" variant="solid" />
            <Checkbox size="md" variant="solid" />
            <Checkbox size="lg" variant="solid" />
          </Flex>
        ),
      },
      {
        description: 'Disabled selected checkboxes.',
        jsx: (
          <Flex gap="8px" alignItems="center">
            <Checkbox size="xs" variant="solid" disabled defaultChecked />
            <Checkbox size="sm" variant="solid" disabled defaultChecked />
            <Checkbox size="md" variant="solid" disabled defaultChecked />
            <Checkbox size="lg" variant="solid" disabled defaultChecked />
          </Flex>
        ),
      },
    ],
    changelog: {
      '0.4.0': ['fixed focus handling'],
      '0.3.0': ['released'],
    },
  } satisfies ComponentMeta<CheckboxProps>,
}
