import { BOX_META } from 'lib/components/core/Box/meta'
import { BUTTON_META } from 'lib/components/core/Button/meta'
import { SwitchProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_SWITCH_INTENT, DEFAULT_SWITCH_SCALE, SWITCH_INTENTS } from '../definitions'
import { SWITCH_CHANGELOG } from './changelog'
import { SWITCH_EXAMPLES } from './examples'

export const SWITCH_META = {
  Switch: {
    overview: {
      bundle: 'pro',
      title: 'Form control for toggling a binary on/off state.',
      features: ['supports both controlled and uncontrolled modes'],
      composedOf: ['Box', 'Slide'],
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
        options: SWITCH_INTENTS,
        defaultValue: String(DEFAULT_SWITCH_INTENT),
      },
      onChange: {
        options: ['(checked: boolean) => void'],
        description: 'Called when the checked state changes. Receives the new checked value.',
      },
      scale: {
        ...BUTTON_META.Button.props.scale,
        defaultValue: DEFAULT_SWITCH_SCALE,
        description: 'Controls overall proportions.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: SWITCH_EXAMPLES,
    changelog: SWITCH_CHANGELOG,
  } satisfies ComponentMeta<SwitchProps>,
}
