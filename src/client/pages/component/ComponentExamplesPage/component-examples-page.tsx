import { pascalCase } from 'change-case'

import meta from 'client/meta'
import { CodeSnippet } from 'client/components'
import { convertElemToString } from 'client/helpers'
import { useAppStore, useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'client/definitions'
import { Box, Flex, Reveal, Spacer, Switch, Text, WithIcon } from 'lib/components'
import { useCurrentTheme } from 'lib/hooks'

const SingleExample = (props: ComponentMeta<unknown>['examples'][number]) => {
  const { description, jsx, code, noSandBox, noCode, sandBoxWithNoPadding } = props

  const theme = useCurrentTheme()
  const flipGlobalThemeOnExamples = useAppStore(state => state.flipGlobalThemeOnExamples)

  return (
    <>
      {description && !noSandBox ? (
        <WithIcon iconName="arrow-down">
          <Text bold>{description}</Text>
        </WithIcon>
      ) : null}
      <Spacer blockSize="xs" />
      {!noSandBox ? (
        <>
          <Box drawable variant="outline" intent="tertiary" tagAttrs={{ style: { borderStyle: 'dashed' } }}>
            <Box
              drawable
              theme={flipGlobalThemeOnExamples ? 'flipped' : theme}
              variant="solid"
              intent="neutral"
              padding={sandBoxWithNoPadding ? '0px' : { base: '20px', lg: '40px' }}
              borderRadius="0px"
            >
              {jsx}
            </Box>
          </Box>
          <Spacer blockSize="xs" />
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
      <Spacer blockSize="2xl" />
    </>
  )
}

export const ComponentExamplesPage = () => {
  const flipGlobalThemeOnExamples = useAppStore(state => state.flipGlobalThemeOnExamples)
  const setFlipGlobalThemeOnExamples = useAppStore(state => state.setFlipGlobalThemeOnExamples)

  const componentsPageItemKey = useComponentsPageStore(state => state.itemKey)

  const itemKeyPascal = pascalCase(componentsPageItemKey || '')

  if (!meta[itemKeyPascal]) return null

  return (
    <Box maxInlineSize="55rem">
      {!meta[itemKeyPascal][itemKeyPascal].hideExamplesThemeToggle ? (
        <>
          <Flex alignItems="center" columnGap="sm">
            <Switch size="xs" checked={flipGlobalThemeOnExamples} onChange={setFlipGlobalThemeOnExamples} />
            <Text bold typography="small">
              Use flipped theme
            </Text>
          </Flex>
          <Spacer blockSize="xl" />
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
