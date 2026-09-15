import { pascalCase } from 'change-case'

import {
  Box,
  HorizontalRule,
  MarkerList,
  Markup,
  NEB_LENGTH,
  Spacer,
  Text,
  Title,
} from 'lib/components'
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
        <Box display="flex" flexDirection="column" alignItems="stretch" gap={NEB_LENGTH.px_016}>
          {versionKeys.map(vKey => (
            <Box
              key={vKey}
              drawable
              intent="primary"
              color="blue"
              padding={NEB_LENGTH.px_016}
              overflowX="auto"
              overflowY="hidden"
              maxInlineSize="100%"
            >
              <Title typography="h6" color="blue">{`v${vKey}`}</Title>
              <HorizontalRule color="blue" marginTop={NEB_LENGTH.px_004} />
              <Spacer blockSize={NEB_LENGTH.px_004} />
              <MarkerList>
                {(changelog[vKey as never] as string[]).map((s, i) => (
                  <MarkerList.Item key={i}>
                    <Markup>
                      <Text intent="neutral">{s}</Text>
                    </Markup>
                  </MarkerList.Item>
                ))}
              </MarkerList>
            </Box>
          ))}
        </Box>
      </Box>
      <Spacer blockSize={NEB_LENGTH.px_064} />
    </>
  )
}
