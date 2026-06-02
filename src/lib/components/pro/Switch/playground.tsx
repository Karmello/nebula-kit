import { SwitchProps } from 'lib/index.pro'

export type PropsFromSwitchKey = (typeof PROPS_FROM_SWITCH)[number]

export const PROPS_FROM_SWITCH = ['color', 'disabled', 'intent', 'size'] as const satisfies readonly (keyof SwitchProps)[]

export const SWITCH_PRESETS = [
  {
    name: 'Default',
    props: {
      //
    } as Record<PropsFromSwitchKey, unknown>,
  },
  {
    name: 'Custom',
    props: {
      color: 'blue',
      intent: 'primary',
      size: 'lg',
    } as Record<PropsFromSwitchKey, unknown>,
  },
]
