import { getDataAttrs } from './get-data-attrs'

export type ComponentName = 'Box' | 'Text' | 'AppFrameHeader' | 'Footer' | 'SplitView'

export const updateDomStaticDataset = (componentName: ComponentName, props: Record<string, unknown>) => {
  let dataAttrs: Record<string, unknown> = {}

  for (const propName in props) {
    dataAttrs = {
      ...dataAttrs,
      ...getDataAttrs(componentName, props, propName),
    }
  }

  return dataAttrs
}
