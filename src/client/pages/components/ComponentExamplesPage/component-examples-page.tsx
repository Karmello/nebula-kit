import { memo, useMemo } from 'react'

import { CodeSnippet } from 'client/components'
import { Box, Flex, Spacer, Text } from 'lib/components'
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
    return meta?.examples?.map(({ jsx, description, noSandBox, sandBoxWithNoPadding }, i) => (
      <Box key={i} maxInlineSize="55rem">
        <Flex flexDirection="column" alignItems="stretch">
          {description ? <Text>{description}</Text> : null}
          <Spacer size={5} />
          {!noSandBox ? (
            <>
              <Box
                variant="outline"
                padding={sandBoxWithNoPadding ? 0 : 20}
                elemProps={{ style: { borderStyle: 'dashed' } }}
              >
                {jsx}
              </Box>
              <Spacer size={5} />
            </>
          ) : null}
          <CodeSnippet code={elemToString(jsx)} />
          <Spacer size={30} />
        </Flex>
      </Box>
    ))
  }, [meta])

  if (!meta) {
    return null
  }

  return memorized
})
