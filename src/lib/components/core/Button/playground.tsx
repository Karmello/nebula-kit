import { ButtonProps } from 'lib/index.core'

export type PropsFromButtonKey = (typeof PROPS_FROM_BUTTON)[number]

export const PROPS_FROM_BUTTON = [
  'align',
  'bold',
  'children',
  'color',
  'disabled',
  'elevated',
  'fullWidth',
  'iconName',
  'iconPlacement',
  'inlineSize',
  'intent',
  'loading',
  'minInlineSize',
  'maxInlineSize',
  'ripple',
  'selected',
  'size',
  'variant',
] as const satisfies readonly (keyof ButtonProps)[]

export const BUTTON_PRESETS = [
  {
    name: 'Simple',
    props: {
      children: 'Click me',
      color: 'green',
      intent: 'primary',
    } as Record<PropsFromButtonKey, unknown>,
  },
  {
    name: 'Full-width',
    props: {
      children: 'Click me',
      color: 'blue',
      intent: 'primary',
      fullWidth: true,
    } as Record<PropsFromButtonKey, unknown>,
  },
  {
    name: 'With icon',
    props: {
      children: 'Send',
      color: 'blue',
      intent: 'primary',
      iconName: 'send',
      iconPlacement: 'right',
    } as Record<PropsFromButtonKey, unknown>,
  },
  {
    name: 'Loading',
    props: {
      children: 'Loading ...',
      color: 'blue',
      intent: 'primary',
      loading: true,
    } as Record<PropsFromButtonKey, unknown>,
  },
]
