import { pascalCase, sentenceCase } from 'change-case'

import meta from 'client/meta'
import { CodeSnippet } from 'client/components'
import { convertElemToString } from 'client/helpers'
import { useAppStore, useCorePageStore, useProPageStore } from 'client/store'
import { ComponentMeta, PageKey } from 'client/definitions'
import { Box, Button, Flex, Reveal, Segment, Spacer, Text } from 'lib/components'
import { THEMES } from 'lib/definitions'
import { useCurrentTheme } from 'lib/hooks'

const SingleExample = (props: ComponentMeta<unknown>['examples'][number]) => {
  const { description, jsx, code, noSandBox, noCode, sandBoxWithNoPadding } = props

  const theme = useCurrentTheme()
  const examplesTheme = useAppStore(state => state.examplesTheme)

  return (
    <>
      {description && !noSandBox ? (
        <Text iconName="arrow-down" bold>
          {description}
        </Text>
      ) : null}
      <Spacer blockSize="10px" />
      {!noSandBox ? (
        <>
          <Box
            tagAttrs={{ style: { borderStyle: 'dashed' } }}
            drawable
            theme={examplesTheme}
            variant={theme === examplesTheme ? 'outline' : 'solid'}
            intent={theme === examplesTheme ? 'tertiary' : 'neutral'}
            padding={sandBoxWithNoPadding ? '0px' : { base: '20px', lg: '40px' }}
          >
            {jsx}
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
            <CodeSnippet
              lang="tsx"
              code={code || convertElemToString(jsx)}
              description={description}
              boldDescription
              descriptionIcon
            />
          )}
        </>
      ) : null}
      <Spacer blockSize="50px" />
    </>
  )
}

export const ComponentExamplesPage = ({ pageKey }: { pageKey: PageKey.core | PageKey.pro }) => {
  const examplesTheme = useAppStore(state => state.examplesTheme)
  const setExamplesTheme = useAppStore(state => state.setExamplesTheme)

  const corePageItemKey = useCorePageStore(state => state.itemKey)
  const proPageItemKey = useProPageStore(state => state.itemKey)

  const itemKeyPascal = pascalCase((pageKey === PageKey.core ? corePageItemKey : proPageItemKey) || '')

  if (!meta[itemKeyPascal]) return null

  return (
    <Box maxInlineSize="55rem">
      {!meta[itemKeyPascal][itemKeyPascal].hideExamplesThemeToggle ? (
        <>
          <Text bold typography="small">
            Theme
          </Text>
          <Segment>
            {THEMES.map(key => (
              <Segment.Item key={key}>
                <Button
                  intent={key === examplesTheme ? 'inverse' : 'tertiary'}
                  size="xs"
                  tagAttrs={{ onClick: () => setExamplesTheme(key) }}
                >
                  {sentenceCase(key)}
                </Button>
              </Segment.Item>
            ))}
          </Segment>
          <Spacer blockSize="50px" />
        </>
      ) : null}
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
