import { memo, useMemo } from 'react'

import { CodeSnippet } from 'client/components'
import { Divider, Flex, Spacer } from 'lib/components'
import { elemToStringService } from 'client/services'
import { useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'lib/definitions'

export const ComponentExamplesPage = memo(() => {
  const elemToString = elemToStringService()

  const { itemKey } = useComponentsPageStore()

  let meta: ComponentMeta<unknown>

  try {
    meta = require(`../../../meta/${itemKey}.meta.tsx`).default
  } catch {
    meta = null
  }

  const memorized = useMemo(() => {
    return meta?.examples?.map((Example, i) => (
      <Flex key={i} flexDirection="column">
        {Example}
        <Spacer size={20} />
        <CodeSnippet code={elemToString(Example)} />
        <Spacer size={20} />
        <Divider />
        <Spacer size={20} />
      </Flex>
    ))
  }, [meta])

  if (!meta) {
    return null
  }

  return memorized
})
