import { type WithIconProps } from './definitions'

export type PropsFromWithIconKey = (typeof PROPS_FROM_WITH_ICON)[number]

export const PROPS_FROM_WITH_ICON = [
  'children',
  'gap',
  'iconAngle',
  'iconColor',
  'iconIntent',
  'iconName',
  'iconPlacement',
  'iconSize',
  'inlineSize',
  'justifyContent',
] as const satisfies readonly (keyof WithIconProps)[]

export const WITH_ICON_PRESETS = [
  {
    name: 'Icon on the right',
    props: {
      children: 'Text aligned together with icon',
      iconName: 'puzzle',
      iconPlacement: 'right',
    } as Record<PropsFromWithIconKey, unknown>,
  },
]
