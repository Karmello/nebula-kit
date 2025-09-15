import { CodeSnippet } from 'client/components'
import { elemToStringService } from 'client/services'
import { useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'client/definitions'
import { Box, Flex, Spacer, Text } from 'lib/components'

const SingleExample = (props: ComponentMeta<unknown>['examples'][number]) => {
  const elemToString = elemToStringService()

  const { description, jsx, noSandBox, sandBoxWithNoPadding } = props

  return (
    <>
      {description ? <Text>{description}</Text> : null}
      <Spacer blockSize={5} />
      {!noSandBox ? (
        <>
          <Box
            variant="outline"
            padding={sandBoxWithNoPadding ? 0 : 20}
            elemProps={{ style: { borderStyle: 'dashed' } }}
          >
            {jsx}
          </Box>
          <Spacer blockSize={5} />
        </>
      ) : null}
      <CodeSnippet code={elemToString(jsx)} />
      <Spacer blockSize={30} />
    </>
  )
}

export const ComponentExamplesPage = () => {
  const { itemKey } = useComponentsPageStore()

  let meta: Record<string, ComponentMeta<unknown>>

  try {
    meta = require(`../../../meta/${itemKey}.meta.tsx`).default
  } catch {
    meta = null
  }

  if (!meta) return null

  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" alignItems="stretch">
        {Object.keys(meta || []).map(key => {
          return (meta[key].examples || []).map((example, i) => (
            <SingleExample key={`${key}_${i}`} {...example} />
          ))
        })}
      </Flex>
    </Box>
  )
}
