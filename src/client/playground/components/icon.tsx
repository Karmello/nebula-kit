import { IconProps } from 'lib/index.core'

export type PropsFromIconKey = (typeof PROPS_FROM_ICON)[number]

export const PROPS_FROM_ICON = [
  'color',
  'intent',
  'name',
  'size',
] as const satisfies readonly (keyof IconProps)[]

export const ICON_PRESETS = [
  {
    name: 'Default size',
    props: {
      name: 'mail',
      color: 'green',
      intent: 'primary',
    },
  },
  {
    name: 'Custom size',
    props: {
      name: 'globe',
      color: 'blue',
      intent: 'secondary',
      size: '24px',
    },
  },
] satisfies {
  name: string
  props: Pick<IconProps, PropsFromIconKey>
}[]
