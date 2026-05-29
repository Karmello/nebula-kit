import { IconProps } from 'lib/components'

export type PropsFromIconKey = (typeof PROPS_FROM_ICON)[number]

export const PROPS_FROM_ICON = ['color', 'intent', 'name', 'size'] as const satisfies readonly (keyof IconProps)[]

export const ICON_PRESETS = [
  {
    name: 'Default size',
    props: {
      name: 'mail',
      color: 'green',
      intent: 'primary',
    } as Record<PropsFromIconKey, unknown>,
  },
  {
    name: 'Custom size',
    props: {
      name: 'globe',
      color: 'blue',
      intent: 'secondary',
      size: '50px',
    } as Record<PropsFromIconKey, unknown>,
  },
]
