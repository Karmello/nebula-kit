import { useDocsPageStore } from 'client/store'
import { ComponentPropsMeta } from 'lib/definitions'

import { PropsTable } from './PropsTable'

export const CompPropsPage = () => {
  const { itemKey } = useDocsPageStore()

  let PROPS_META: ComponentPropsMeta<unknown>

  try {
    PROPS_META = require(`../../../../../docs/${itemKey}/${itemKey}-props.meta.ts`).default
  } catch {
    PROPS_META = null
  }

  if (!PROPS_META) {
    return null
  }

  const groupedByCategory = Object.groupBy(PROPS_META, prop => prop.category)

  return Object.keys(groupedByCategory).map(category => (
    <PropsTable key={category} data={groupedByCategory[category]} />
  ))
}
