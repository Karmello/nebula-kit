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
import { LIBRARY_ITEM_LABEL_BY_KEY } from 'client/definitions'
import meta from 'client/meta'
import { useLibraryPageStore } from 'client/store'

export const LibraryChangelogPage = () => {
  const libraryPageItemKey = useLibraryPageStore(state => state.itemKey)

  const itemLabel = LIBRARY_ITEM_LABEL_BY_KEY[libraryPageItemKey] || ''

  if (!meta[itemLabel]) return null

  const changelog = meta[itemLabel][itemLabel]?.changelog || {}
  const versionKeys = Object.keys(changelog)

  return (
    <>
      <Box
        maxInlineSize="55rem"
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        gap={NEB_LENGTH.px_016}
      >
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
            <Title typography="h6" color="blue" intent="primary">{`v${vKey}`}</Title>
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
      <Spacer blockSize={NEB_LENGTH.px_064} />
    </>
  )
}
