import { useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'client/definitions'

import { PropsTable } from './PropsTable'

export const ComponentPropsPage = () => {
  const { itemKey } = useComponentsPageStore()

  let meta: Record<string, ComponentMeta<unknown>>

  try {
    meta = require(`../../../meta/${itemKey}.meta.tsx`).default
  } catch {
    meta = null
  }

  if (!meta) return null

  return Object.keys(meta || []).map(key => <PropsTable key={key} data={meta[key].props} />)
}
