import { type SwitchProps } from 'lib/index.pro'

export type PropsFromSwitchKey = (typeof PROPS_FROM_SWITCH)[number]

export const PROPS_FROM_SWITCH = [
  'checked',
  'color',
  'disabled',
  'intent',
  'ripple',
  'scale',
] as const satisfies readonly (keyof SwitchProps)[]

export const SWITCH_PRESETS = [
  {
    name: 'Default',
    props: {
      //
    },
  },
  {
    name: 'Custom',
    props: {
      color: 'blue',
      intent: 'primary',
      scale: 'lg',
    },
  },
] satisfies {
  name: string
  props: Pick<SwitchProps, PropsFromSwitchKey>
}[]
