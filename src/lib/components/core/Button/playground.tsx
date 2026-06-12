import type { ButtonProps } from './types'

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
  'scale',
  'variant',
] as const satisfies readonly (keyof ButtonProps)[]

export const BUTTON_PRESETS = [
  {
    name: 'Simple',
    props: {
      children: 'Click me',
      color: 'green',
      intent: 'primary',
    },
  },
  {
    name: 'Full-width',
    props: {
      children: 'Click me',
      color: 'blue',
      intent: 'primary',
      fullWidth: true,
    },
  },
  {
    name: 'With icon',
    props: {
      children: 'Send',
      color: 'blue',
      intent: 'primary',
      iconName: 'send',
      iconPlacement: 'right',
    },
  },
  {
    name: 'Loading',
    props: {
      children: 'Loading ...',
      color: 'blue',
      intent: 'primary',
      loading: true,
    },
  },
] satisfies {
  name: string
  props: Pick<ButtonProps, PropsFromButtonKey>
}[]
