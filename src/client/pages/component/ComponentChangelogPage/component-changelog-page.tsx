import { pascalCase } from 'change-case'

import meta from 'client/meta'
import { PageKey } from 'client/definitions'
import { useCorePageStore, useProPageStore } from 'client/store'
import { Box, Flex, MarkerList, Section, Spacer, Text } from 'lib/components'

export const ComponentChangelogPage = ({ pageKey }: { pageKey: PageKey.core | PageKey.pro }) => {
  const corePageItemKey = useCorePageStore(state => state.itemKey)
  const proPageItemKey = useProPageStore(state => state.itemKey)

  const itemKeyPascal = pascalCase((pageKey === PageKey.core ? corePageItemKey : proPageItemKey) || '')

  if (!meta[itemKeyPascal]) return null

  const changelog = meta[itemKeyPascal][itemKeyPascal]?.changelog || {}
  const versionKeys = Object.keys(changelog)

  return (
    <>
      <Box maxInlineSize="55rem">
        <Flex flexDirection="column" alignItems="stretch" gap="25px">
          {versionKeys.map(vKey => (
            <Section key={vKey} heading={`v${vKey}`} size="sm" intent="primary" color="blue">
              <MarkerList>
                {(changelog[vKey as never] as string[]).map((s, i) => (
                  <MarkerList.Item key={i}>
                    <Text intent="neutral">{s}</Text>
                  </MarkerList.Item>
                ))}
              </MarkerList>
            </Section>
          ))}
        </Flex>
      </Box>
      <Spacer blockSize="60px" />
    </>
  )
}
