import {
  CHECKBOX_VARIANTS,
  DEFAULT_CHECKBOX_INTENT,
  DEFAULT_CHECKBOX_SIZE,
  DEFAULT_CHECKBOX_VARIANT,
} from 'lib/components/core/Checkbox/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { CheckboxProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { CHECKBOX_CHANGELOG } from './changelog'
import { CHECKBOX_EXAMPLES } from './examples'

export const CHECKBOX_META = {
  Checkbox: {
    overview: {
      bundle: 'core',
      title: 'Form control for toggling a binary on/off state.',
      features: ['supports both controlled and uncontrolled modes'],
      composedOf: ['Box', 'Icon'],
      exposedTags: ['div'],
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
    examples: CHECKBOX_EXAMPLES,
    changelog: CHECKBOX_CHANGELOG,
  } satisfies ComponentMeta<CheckboxProps>,
}
