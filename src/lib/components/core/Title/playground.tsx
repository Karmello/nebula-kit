import type { TitleProps } from './types'

export type PropsFromTitleKey = (typeof PROPS_FROM_TITLE)[number]

export const PROPS_FROM_TITLE = [
  'children',
  'color',
  'iconName',
  'iconPlacement',
  'intent',
  'typography',
] as const satisfies readonly (keyof TitleProps)[]

export const TITLE_PRESETS = [
  {
    name: 'Icon on the right',
    props: {
      children: 'Text aligned together with icon',
      iconName: 'puzzle',
      iconPlacement: 'right',
    },
  },
] satisfies {
  name: string
  props: Pick<TitleProps, PropsFromTitleKey>
}[]
