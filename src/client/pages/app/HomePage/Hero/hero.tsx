import { Box, Button, Image, Link, NEB_LENGTH, Spacer, Text, Tooltip } from 'lib/components'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { useLibraryPageStore } from 'client/store'

export const Hero = () => {
  const navigateTo = useNavigateTo()

  const libraryPageCategoryKey = useLibraryPageStore(state => state.categoryKey)
  const libraryPageItemKey = useLibraryPageStore(state => state.itemKey)
  const libraryPageSectionKey = useLibraryPageStore(state => state.sectionKey)

  const libraryHref = `${PageKey.library}/${libraryPageCategoryKey}/${libraryPageItemKey}/${libraryPageSectionKey}`

  return (
    <Box
      display="flex"
      columnGap={NEB_LENGTH.px_024}
      rowGap={NEB_LENGTH.px_048}
      alignItems="center"
      flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
    >
      <Box flex="1">
        <Text typography="h5">
          React UI system designed to minimize interface development effort, letting you focus on
          application logic while keeping products consistent, maintainable and resistant to
          entropy.
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_048} />
        <Box
          display="flex"
          columnGap={NEB_LENGTH.px_008}
          rowGap={NEB_LENGTH.px_016}
          flexWrap="wrap"
          justifyContent={{ base: 'center', md: 'flex-start' }}
        >
          <Link
            href={libraryHref}
            onClick={() => {
              navigateTo(libraryHref)
            }}
          >
            <Button
              variant="solid"
              color="blue"
              intent="primary"
              iconName="arrow-right"
              iconPlacement="right"
              scale="md"
            >
              Library
            </Button>
          </Link>
          <Link
            href={`${PageKey.foundations}/overview/introduction/about-nebula-kit`}
            onClick={() => {
              navigateTo(`${PageKey.foundations}/overview/introduction/about-nebula-kit`)
            }}
          >
            <Button
              variant="ghost"
              color="blue"
              intent="primary"
              iconName="arrow-right"
              iconPlacement="right"
              scale="md"
            >
              Read more
            </Button>
          </Link>
        </Box>
      </Box>
      <Box>
        <Link
          href={PageKey.assistant}
          onClick={() => {
            navigateTo(PageKey.assistant)
          }}
          composeMode="wrap"
        >
          <Tooltip content="Go to AI assistant">
            <Image
              src="/captain-nebula.webp"
              inlineSize="225px"
              blockSize="225px"
              alt="Captain Nebula"
              fetchPriority="high"
            />
          </Tooltip>
        </Link>
      </Box>
    </Box>
  )
}
