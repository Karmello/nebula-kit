import { pascalCase } from 'change-case'

import { Box, Markup, NEB_LENGTH, Reveal, Spacer, Switch, Text, Title } from 'lib/components'
import { useCurrentTheme } from 'lib/hooks'
import { CodeSnippet } from 'client/components'
import { ComponentMeta } from 'client/definitions'
import { convertElemToString } from 'client/helpers'
import meta from 'client/meta'
import { useAppStore, useComponentsPageStore } from 'client/store'

const SingleExample = (
  props: ComponentMeta<unknown>['examples'][number] & { hideExamplesThemeToggle: boolean }
) => {
  const {
    description,
    jsx,
    code,
    noSandBox,
    noCode,
    sandBoxWithNoPadding,
    hideExamplesThemeToggle,
  } = props

  const theme = useCurrentTheme()
  const flipGlobalThemeOnExamples = useAppStore(state => state.flipGlobalThemeOnExamples)

  return (
    <>
      {description && !noSandBox ? (
        <Title iconName="arrow-down">
          <Markup>
            <Text bold>{description}</Text>
          </Markup>
        </Title>
      ) : null}
      <Spacer blockSize={NEB_LENGTH.px_008} />
      {!noSandBox ? (
        <>
          <Box
            drawable
            variant="outline"
            intent="tertiary"
            tagAttrs={{ style: { borderStyle: 'dashed' } }}
          >
            <Box
              drawable
              theme={
                !hideExamplesThemeToggle
                  ? flipGlobalThemeOnExamples
                    ? 'global-flipped'
                    : theme
                  : undefined
              }
              variant="solid"
              intent="neutral"
              padding={sandBoxWithNoPadding ? '0px' : { base: '20px', lg: '40px' }}
              borderRadius={NEB_LENGTH.px_000}
            >
              {jsx}
            </Box>
          </Box>
          <Spacer blockSize={NEB_LENGTH.px_008} />
        </>
      ) : null}
      {!noCode ? (
        <>
          {!noSandBox ? (
            <Reveal label="Code" intent="tertiary">
              <CodeSnippet
                lang="tsx"
                code={code || convertElemToString(jsx)}
                borderRadius={false}
                fullBg
              />
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
      <Spacer blockSize={NEB_LENGTH.px_064} />
    </>
  )
}

export const ComponentExamplesPage = () => {
  const flipGlobalThemeOnExamples = useAppStore(state => state.flipGlobalThemeOnExamples)
  const setFlipGlobalThemeOnExamples = useAppStore(state => state.setFlipGlobalThemeOnExamples)

  const componentsPageItemKey = useComponentsPageStore(state => state.itemKey)

  const itemKeyPascal = pascalCase(componentsPageItemKey || '')

  if (!meta[itemKeyPascal]) return null

  const hideExamplesThemeToggle = meta[itemKeyPascal][itemKeyPascal].hideExamplesThemeToggle

  return (
    <Box maxInlineSize="55rem">
      {!hideExamplesThemeToggle ? (
        <>
          <Box display="flex" alignItems="center" columnGap={NEB_LENGTH.px_016}>
            <Switch
              scale="xs"
              checked={flipGlobalThemeOnExamples}
              onChange={setFlipGlobalThemeOnExamples}
            />
            <Text bold typography="small">
              Use flipped theme
            </Text>
          </Box>
          <Spacer blockSize={NEB_LENGTH.px_048} />
        </>
      ) : null}
      <Box display="flex" flexDirection="column" alignItems="stretch">
        {Object.keys(meta[itemKeyPascal] || []).map(key => {
          return (meta[itemKeyPascal][key].examples || [])
            .filter(example => !example.skip)
            .map((example, i) => (
              <SingleExample
                key={`${key}_${i}`}
                {...example}
                hideExamplesThemeToggle={hideExamplesThemeToggle}
              />
            ))
        })}
      </Box>
    </Box>
  )
}
