import { pascalCase } from 'change-case'

import meta from 'client/meta'
import { CodeSnippet } from 'client/components'
import { convertElemToString } from 'client/helpers'
import { useCorePageStore, useProPageStore } from 'client/store'
import { ComponentMeta, PageKey } from 'client/definitions'
import { Box, Flex, Reveal, Spacer, Text } from 'lib/components'

const SingleExample = (props: ComponentMeta<unknown>['examples'][number]) => {
  const { description, jsx, code, noSandBox, noCode, sandBoxWithNoPadding } = props

  return (
    <>
      {description ? <Text bold>{description}</Text> : null}
      <Spacer blockSize="10px" />
      {!noSandBox ? (
        <>
          <Box
            drawable
            variant="outline"
            color="gray"
            intent="secondary"
            padding={sandBoxWithNoPadding ? '0px' : { base: '20px', lg: '40px' }}
            tagAttrs={{
              style: { borderStyle: 'dashed' },
            }}
          >
            {jsx}
          </Box>
          <Spacer blockSize="10px" />
        </>
      ) : null}
      {!noCode ? (
        <>
          {!noSandBox ? (
            <Reveal label="Code" color="gray" intent="muted">
              <Box padding="4px">
                <CodeSnippet lang="tsx" code={code || convertElemToString(jsx)} />
              </Box>
            </Reveal>
          ) : (
            <CodeSnippet lang="tsx" code={code || convertElemToString(jsx)} />
          )}
        </>
      ) : null}
      <Spacer blockSize="50px" />
    </>
  )
}

export const ComponentExamplesPage = ({ pageKey }: { pageKey: PageKey.core | PageKey.pro }) => {
  const corePageStore = useCorePageStore()
  const proPageStore = useProPageStore()

  const itemKeyPascal = pascalCase(
    (pageKey === PageKey.core ? corePageStore.itemKey : proPageStore.itemKey) || ''
  )

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
