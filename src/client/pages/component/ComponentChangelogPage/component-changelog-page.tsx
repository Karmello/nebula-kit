import { pascalCase } from 'change-case'

import { Box, Flex, MarkerList, Markup, NEB_LENGTH, Section, Spacer, Text } from 'lib/components'
import meta from 'client/meta'
import { useComponentsPageStore } from 'client/store'

export const ComponentChangelogPage = () => {
  const componentsPageItemKey = useComponentsPageStore(state => state.itemKey)

  const itemKeyPascal = pascalCase(componentsPageItemKey || '')

  if (!meta[itemKeyPascal]) return null

  const changelog = meta[itemKeyPascal][itemKeyPascal]?.changelog || {}
  const versionKeys = Object.keys(changelog)

  return (
    <>
      <Box maxInlineSize="55rem">
        <Flex flexDirection="column" alignItems="stretch" gap={NEB_LENGTH.px_048}>
          {versionKeys.map(vKey => (
            <Section key={vKey} heading={`v${vKey}`} size="sm" intent="primary" color="blue">
              <MarkerList>
                {(changelog[vKey as never] as string[]).map((s, i) => (
                  <MarkerList.Item key={i}>
                    <Markup>
                      <Text intent="neutral">{s}</Text>
                    </Markup>
                  </MarkerList.Item>
                ))}
              </MarkerList>
            </Section>
          ))}
        </Flex>
      </Box>
      <Spacer blockSize={NEB_LENGTH.px_064} />
    </>
  )
}
