import type { BoxProps } from 'lib/index.core'

export type PropsFromBoxKey = (typeof PROPS_FROM_BOX)[number]

export const PROPS_FROM_BOX = [
  'blockSize',
  'borderRadius',
  'borderWidth',
  'brand',
  'children',
  'color',
  'cursor',
  'disabled',
  'drawable',
  'surfaceDepth',
  'inlineSize',
  'intent',
  'interactive',
  'margin',
  'padding',
  'surfaceDepth',
  'theme',
  'visibility',
] as const satisfies readonly (keyof BoxProps)[]

export const BOX_PRESETS = [
  {
    name: 'Non-drawable',
    props: {
      children: 'Non-drawable Box used as a simple container.',
    },
  },
  {
    name: 'Drawable',
    props: {
      children: 'Drawable Box with solid variant, primary intent and green color applied.',
      drawable: true,
      // variant: 'solid',
      color: 'green',
      intent: 'primary',
      padding: '20px',
    },
  },
  {
    name: 'Interactive',
    props: {
      children: 'Interactive Box with solid variant, primary intent and blue color applied.',
      drawable: true,
      interactive: true,
      // variant: 'solid',
      color: 'blue',
      intent: 'primary',
      padding: '20px',
    },
  },
] satisfies {
  name: string
  props: Pick<BoxProps, PropsFromBoxKey>
}[]
