import { pascalCase } from 'change-case'

import meta from 'client/meta'
import { CodeSnippet } from 'client/components'
import { convertElemToString } from 'client/helpers'
import { useCorePageStore, useProPageStore } from 'client/store'
import { ComponentMeta, PageKey } from 'client/definitions'
import { Box, Flex, Reveal, Spacer, Text } from 'lib/components'
import { useCurrentTheme } from 'lib/hooks'

const SingleExample = (props: ComponentMeta<unknown>['examples'][number]) => {
  const { description, jsx, code, noSandBox, noCode, sandBoxWithNoPadding } = props

  const theme = useCurrentTheme()

  return (
    <>
      {description && !noSandBox ? <Text iconName="arrow-down">{description}</Text> : null}
      <Spacer blockSize="10px" />
      {!noSandBox ? (
        <>
          <Box tagAttrs={{ style: { borderStyle: 'dashed' } }} drawable variant="outline" intent="inverse" color="gray">
            <Box
              drawable
              theme={theme === 'light' ? 'dark' : 'light'}
              variant="solid"
              intent="neutral"
              padding={sandBoxWithNoPadding ? '0px' : { base: '20px', lg: '40px' }}
            >
              {jsx}
            </Box>
          </Box>
          <Spacer blockSize="10px" />
        </>
      ) : null}
      {!noCode ? (
        <>
          {!noSandBox ? (
            <Reveal label="Code" intent="tertiary">
              <CodeSnippet lang="tsx" code={code || convertElemToString(jsx)} borderRadius={false} fullBg />
            </Reveal>
          ) : (
            <CodeSnippet lang="tsx" code={code || convertElemToString(jsx)} description={description} />
          )}
        </>
      ) : null}
      <Spacer blockSize="50px" />
    </>
  )
}

export const ComponentExamplesPage = ({ pageKey }: { pageKey: PageKey.core | PageKey.pro }) => {
  const corePageItemKey = useCorePageStore(state => state.itemKey)
  const proPageItemKey = useProPageStore(state => state.itemKey)

  const itemKeyPascal = pascalCase((pageKey === PageKey.core ? corePageItemKey : proPageItemKey) || '')

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
