import { CalloutProps } from 'lib/index.core'

export type PropsFromCalloutKey = (typeof PROPS_FROM_CALLOUT)[number]

export const PROPS_FROM_CALLOUT = [
  'content',
  'heading',
  'intent',
  'size',
  'status',
  'variant',
] as const satisfies readonly (keyof CalloutProps)[]

export const CALLOUT_PRESETS = [
  {
    name: 'Success',
    props: {
      content: 'Success callout with solid variant applied.',
      status: 'success',
    } as Record<PropsFromCalloutKey, unknown>,
  },
  {
    name: 'Info',
    props: {
      content: 'Info callout with outline variant applied.',
      status: 'info',
      variant: 'outline',
    } as Record<PropsFromCalloutKey, unknown>,
  },
]
