import { useDocsPageStore } from 'client/store'
import { ComponentOverviewMeta } from 'lib/definitions'
import { Text } from 'lib/components'

export const CompOverviewPage = () => {
  const { itemKey } = useDocsPageStore()

  let OVERVIEW_META: ComponentOverviewMeta

  try {
    OVERVIEW_META = require(`../../../../../docs/${itemKey}/${itemKey}-overview.meta.ts`).default
  } catch {
    OVERVIEW_META = null
  }

  if (!OVERVIEW_META) {
    return null
  }

  return <Text>{OVERVIEW_META.description}</Text>
}
