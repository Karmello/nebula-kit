import { TitleProps } from 'lib/index.core'

export type PropsFromTitleKey = (typeof PROPS_FROM_TITLE)[number]

export const PROPS_FROM_TITLE = [
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
] as const satisfies readonly (keyof TitleProps)[]

export const TITLE_PRESETS = [
  {
    name: 'Icon on the right',
    props: {
      children: 'Text aligned together with icon',
      iconName: 'puzzle',
      iconPlacement: 'right',
    } as Record<PropsFromTitleKey, unknown>,
  },
]
