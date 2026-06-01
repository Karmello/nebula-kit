import { type CheckboxProps } from './definitions'

export type PropsFromCheckboxKey = (typeof PROPS_FROM_CHECKBOX)[number]

export const PROPS_FROM_CHECKBOX = [
  'checked',
  'color',
  'disabled',
  'intent',
  'size',
  'variant',
] as const satisfies readonly (keyof CheckboxProps)[]

export const CHECKBOX_PRESETS = [
  {
    name: 'Standard',
    props: {
      color: 'gray',
    } as Record<PropsFromCheckboxKey, unknown>,
  },
  {
    name: 'Solid',
    props: {
      variant: 'solid',
      color: 'blue',
    } as Record<PropsFromCheckboxKey, unknown>,
  },
]
