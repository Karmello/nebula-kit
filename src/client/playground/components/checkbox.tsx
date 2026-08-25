import { type CheckboxProps } from 'lib/index.core'

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
    },
  },
  {
    name: 'Solid',
    props: {
      variant: 'solid',
      color: 'blue',
    },
  },
] satisfies {
  name: string
  props: Pick<CheckboxProps, PropsFromCheckboxKey>
}[]
