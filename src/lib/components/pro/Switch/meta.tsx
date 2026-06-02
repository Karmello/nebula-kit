import { BOX_META } from 'lib/components/core/Box/meta'
import { BUTTON_META } from 'lib/components/core/Button/meta'
import { Switch, SwitchProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_SWITCH_INTENT, DEFAULT_SWITCH_SIZE, SWITCH_INTENTS } from './definitions'

export const SWITCH_META = {
  Switch: {
    overview: {
      bundle: 'pro',
      title: 'Form control for toggling a binary on/off state.',
      features: ['supports both controlled and uncontrolled modes'],
      composedOf: ['Box', 'Slide'],
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
        options: SWITCH_INTENTS,
        defaultValue: String(DEFAULT_SWITCH_INTENT),
      },
      onChange: {
        options: ['(checked: boolean) => void'],
        description: 'Called when the checked state changes. Receives the new checked value.',
      },
      size: {
        ...BUTTON_META.Button.props.size,
        defaultValue: DEFAULT_SWITCH_SIZE,
        description: 'Controls overall proportions.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: [
      {
        jsx: <Switch />,
        skip: true,
      },
      {
        description: 'Default Switch.',
        jsx: <Switch />,
      },
      {
        description: 'Switch turned on by default.',
        jsx: <Switch defaultChecked />,
      },
      {
        description: 'Switch with custom size.',
        jsx: <Switch size="lg" />,
      },
      {
        description: 'Disabled Switch.',
        jsx: <Switch disabled />,
      },
    ],
    changelog: {
      '0.9.0': ['narrowed supported `intent` values'],
      '0.7.0': ['added `intent` prop'],
      '0.4.0': ['released'],
    },
  } as ComponentMeta<SwitchProps>,
}
