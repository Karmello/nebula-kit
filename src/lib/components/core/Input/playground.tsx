import { InputProps } from 'lib/index.core'

export type PropsFromInputKey = (typeof PROPS_FROM_INPUT)[number]

export const PROPS_FROM_INPUT = [
  'color',
  'disabled',
  'intent',
  'placeholder',
  'readOnly',
  'size',
  'variant',
] as const satisfies readonly (keyof InputProps)[]

export const INPUT_PRESETS = [
  {
    name: 'Default',
    props: {
      placeholder: 'Input with solid variant applied',
    } as Record<PropsFromInputKey, unknown>,
  },
  {
    name: 'Custom',
    props: {
      placeholder: 'Input with outline variant applied',
      variant: 'outline',
    } as Record<PropsFromInputKey, unknown>,
  },
]
