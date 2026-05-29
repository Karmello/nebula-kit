import { LoaderProps } from 'lib/components'

export type PropsFromLoaderKey = (typeof PROPS_FROM_LOADER)[number]

export const PROPS_FROM_LOADER = ['active', 'centered', 'color', 'size'] as const satisfies readonly (keyof LoaderProps)[]

export const LOADER_PRESETS = [
  {
    name: 'Default',
    props: {} as Record<PropsFromLoaderKey, unknown>,
  },
  {
    name: 'Custom',
    props: {
      color: 'blue',
      size: '2xl',
    } as Record<PropsFromLoaderKey, unknown>,
  },
]
