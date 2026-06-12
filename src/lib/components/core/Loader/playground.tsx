import { type LoaderProps } from './definitions'

export type PropsFromLoaderKey = (typeof PROPS_FROM_LOADER)[number]

export const PROPS_FROM_LOADER = ['active', 'centered', 'color', 'size'] as const satisfies readonly (keyof LoaderProps)[]

export const LOADER_PRESETS = [
  {
    name: 'Default',
    props: {},
  },
  {
    name: 'Custom',
    props: {
      color: 'blue',
      size: '48px',
    },
  },
] satisfies {
  name: string
  props: Pick<LoaderProps, PropsFromLoaderKey>
}[]
