import { type IconButtonProps } from './definitions'

export type PropsFromIconButtonKey = (typeof PROPS_FROM_ICON_BUTTON)[number]

export const PROPS_FROM_ICON_BUTTON = [
  'color',
  'disabled',
  'elevated',
  'iconName',
  'intent',
  'loading',
  'ripple',
  'size',
  'variant',
] as const satisfies readonly (keyof IconButtonProps)[]

export const ICON_BUTTON_PRESETS = [
  {
    name: 'Default',
    props: {
      iconName: 'send',
      color: 'blue',
    } as Record<PropsFromIconButtonKey, unknown>,
  },
]
