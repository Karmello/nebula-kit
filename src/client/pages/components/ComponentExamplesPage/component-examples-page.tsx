import { pascalCase } from 'change-case'

import meta from 'client/meta'
import { CodeSnippet } from 'client/components'
import { convertElemToString } from 'client/helpers'
import { useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'client/definitions'
import { Box, Flex, Reveal, Spacer, Text } from 'lib/components'

const SingleExample = (props: ComponentMeta<unknown>['examples'][number]) => {
  const { description, jsx, code, noSandBox, noCode, sandBoxWithNoPadding } = props

  return (
    <>
      {description ? <Text bold>{description}</Text> : null}
      <Spacer blockSize={10} />
      {!noSandBox ? (
        <>
          <Box
            variant="outline"
            color="gray"
            intent="secondary"
            padding={sandBoxWithNoPadding ? 0 : { base: 20, lg: 40 }}
            tagAttrs={{
              style: { borderStyle: 'dashed' },
            }}
          >
            {jsx}
          </Box>
          <Spacer blockSize={10} />
        </>
      ) : null}
      {!noCode ? (
        <>
          {!noSandBox ? (
            <Reveal label="Code" color="gray" intent="muted">
              <Box padding={4}>
                <CodeSnippet code={code || convertElemToString(jsx)} borderRadius={0} />
              </Box>
            </Reveal>
          ) : (
            <CodeSnippet code={code || convertElemToString(jsx)} />
          )}
        </>
      ) : null}
      <Spacer blockSize={50} />
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
