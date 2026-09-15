import { getDataAttrs } from './get-data-attrs'

export const buildStaticDataset = (namespace: string, props: Record<string, unknown>) => {
  const dataAttrs: Record<string, unknown> = {}

  for (const propName in props) {
    Object.assign(dataAttrs, getDataAttrs(namespace, props, propName))
  }

  return dataAttrs
}
