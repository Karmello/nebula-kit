import { pascalCase } from 'change-case'

import { PageKey } from 'client/definitions'
import { useCorePageStore, useProPageStore } from 'client/store'
import meta from 'client/meta'
import { Box, MarkerList, Section, Spacer, Text } from 'lib/components'

export const ComponentChangelogPage = ({ pageKey }: { pageKey: PageKey.core | PageKey.pro }) => {
  const corePageStore = useCorePageStore()
  const proPageStore = useProPageStore()

  const itemKeyPascal = pascalCase(
    (pageKey === PageKey.core ? corePageStore.itemKey : proPageStore.itemKey) || ''
  )

  if (!meta[itemKeyPascal]) return null

  const changelog = meta[itemKeyPascal][itemKeyPascal]?.changelog || {}
  const versionKeys = Object.keys(changelog)

  return (
    <>
      <Box maxInlineSize="55rem">
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
      </Box>
      <Spacer blockSize="60px" />
    </>
  )
}
