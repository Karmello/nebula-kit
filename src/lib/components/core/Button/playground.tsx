import { type ButtonProps } from './definitions'

export type PropsFromButtonKey = (typeof PROPS_FROM_BUTTON)[number]

export const PROPS_FROM_BUTTON = [
  'align',
  'bold',
  'children',
  'color',
  'description',
  'disabled',
  'elevated',
  'fullWidth',
  'iconAngle',
  'iconName',
  'iconPlacement',
  'inlineSize',
  'intent',
  'interactive',
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
  {
    name: 'Extra large',
    props: {
      children: 'Extra large button',
      description: 'Extra large button displays description.',
      bold: true,
      size: 'xl',
      iconName: 'tree-pine',
      color: 'blue',
      intent: 'secondary',
    } as Record<PropsFromButtonKey, unknown>,
  },
]
