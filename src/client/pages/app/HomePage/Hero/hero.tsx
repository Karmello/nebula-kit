import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { Button, Flex, Image, Link, Spacer, Text } from 'lib/components'

export const Hero = () => {
  const navigateTo = useNavigateTo()

  return (
    <Flex
      columnGap="25px"
      rowGap="50px"
      alignItems="center"
      flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
    >
      <Flex.Item>
        <Text typography="h6">
          React UI system built on composition and prop inheritance, with strict rules governing component
          appearance and behavior. Designed to reduce UI entropy and keep interfaces consistent and
          maintainable as products grow over time.
        </Text>
        <Spacer blockSize="30px" />
        <Flex gap="10px" flexWrap="wrap" justifyContent={{ base: 'center', md: 'flex-start' }}>
          <Link
            href={PageKey.playground}
            onClick={() => {
              navigateTo(PageKey.playground)
            }}
          >
            <Button color="purple" intent="primary" iconName="arrow-right" iconPlacement="right" size="sm">
              Playground
            </Button>
          </Link>
          <Link
            href={`${PageKey.foundations}/overview/getting-started/installation`}
            onClick={() => {
              navigateTo(`${PageKey.foundations}/overview/getting-started/installation`)
            }}
          >
            <Button
              variant="ghost"
              color="purple"
              intent="primary"
              iconName="arrow-right"
              iconPlacement="right"
              size="sm"
            >
              Getting started
            </Button>
          </Link>
        </Flex>
      </Flex.Item>
      <Image
        src="/captain-nebula.webp"
        inlineSize="225px"
        blockSize="225px"
        alt="Captain Nebula"
        fetchPriority="high"
      />
    </Flex>
  )
}
