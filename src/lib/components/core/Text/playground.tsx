import { TextProps } from './definitions'

export type PropsFromTextKey = (typeof PROPS_FROM_TEXT)[number]

export const PROPS_FROM_TEXT = [
  'bold',
  'children',
  'clampLines',
  'color',
  'fontSize',
  'intent',
  'italic',
  'lineHeight',
  'noWrap',
  'textAlign',
  'truncate',
  'typography',
  'underline',
] as const satisfies readonly (keyof TextProps)[]

export const TEXT_PRESETS = [
  {
    name: 'Default',
    props: {
      children: 'This is basic text with default body typography.',
    } as Record<PropsFromTextKey, unknown>,
  },
  {
    name: 'Custom',
    props: {
      children: 'This is colored heading text.',
      color: 'red',
      intent: 'primary',
      typography: 'h4',
    } as Record<PropsFromTextKey, unknown>,
  },
]
