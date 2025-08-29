import { useDocsPageStore } from 'client/store'
import { ComponentMeta } from 'lib/definitions'

import { PropsTable } from './PropsTable'

export const CompPropsPage = () => {
  const { itemKey } = useDocsPageStore()

  let META_DATA: ComponentMeta<unknown>

  try {
    META_DATA = require(`../../../../../meta/${itemKey}.meta.ts`).default
  } catch {
    META_DATA = null
  }

  if (!META_DATA) {
    return null
  }

  const groupedByCategory = Object.groupBy(META_DATA.props, prop => prop.category)

  return Object.keys(groupedByCategory).map(category => (
    <PropsTable key={category} data={groupedByCategory[category]} />
  ))
}
