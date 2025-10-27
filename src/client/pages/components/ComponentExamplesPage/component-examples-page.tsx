import { pascalCase } from 'change-case'

import { CodeSnippet } from 'client/components'
import { elemToStringService } from 'client/services'
import { useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'client/definitions'
import meta from 'client/meta'
import { Box, Flex, Reveal, Spacer, Text } from 'lib/components'

const SingleExample = (props: ComponentMeta<unknown>['examples'][number]) => {
  const elemToString = elemToStringService()

  const { description, jsx, code, noSandBox, sandBoxWithNoPadding } = props

  return (
    <>
      {description ? <Text bold>{description}</Text> : null}
      <Spacer blockSize={5} />
      {!noSandBox ? (
        <>
          <Box
            variant="outline"
            intent="highlight"
            padding={sandBoxWithNoPadding ? 0 : { base: 10, lg: 20 }}
            tagAttrs={{
              style: { borderStyle: 'dashed' },
            }}
          >
            {jsx}
          </Box>
          <Spacer blockSize={5} />
        </>
      ) : null}
      {!noSandBox ? (
        <Reveal label="Code" intent="muted">
          <Box padding={2}>
            <CodeSnippet code={code || elemToString(jsx)} borderRadius={0} />
          </Box>
        </Reveal>
      ) : (
        <CodeSnippet code={code || elemToString(jsx)} />
      )}
      <Spacer blockSize={30} />
    </>
  )
}

export const ComponentExamplesPage = () => {
  const { itemKey } = useComponentsPageStore()

  const itemKeyPascal = pascalCase(itemKey || '')

  if (!meta[itemKeyPascal]) return null

  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" alignItems="stretch">
        {Object.keys(meta[itemKeyPascal] || []).map(key => {
          return (meta[itemKeyPascal][key].examples || [])
            .filter(example => !example.skip)
            .map((example, i) => <SingleExample key={`${key}_${i}`} {...example} />)
        })}
      </Flex>
    </Box>
  )
}
