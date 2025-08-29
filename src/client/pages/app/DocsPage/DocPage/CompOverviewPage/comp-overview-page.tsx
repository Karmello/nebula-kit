import { useDocsPageStore } from 'client/store'
import { ComponentMeta } from 'lib/definitions'
import { Text } from 'lib/components'

export const CompOverviewPage = () => {
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

  return <Text>{META_DATA.description}</Text>
}
