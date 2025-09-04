import { memo } from 'react'

import { Text } from 'lib/components'
import { useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'lib/definitions'

export const ComponentOverviewPage = memo(() => {
  const { itemKey } = useComponentsPageStore()

  let meta: ComponentMeta<unknown>

  try {
    meta = require(`../../../meta/${itemKey}.meta.tsx`).default
  } catch {
    meta = null
  }

  if (!meta) {
    return null
  }

  return <Text>{meta.description}</Text>
})
