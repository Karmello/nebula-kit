import { type CalloutProps } from './definitions'

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
    },
  },
  {
    name: 'Info',
    props: {
      content: 'Info callout with outline variant applied.',
      status: 'info',
      variant: 'outline',
    },
  },
] satisfies {
  name: string
  props: Pick<CalloutProps, PropsFromCalloutKey>
}[]
