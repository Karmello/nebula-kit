import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { usePatternsStore } from 'client/store'
import { Button, Flex, Image, Link, Spacer, Text, Tooltip } from 'lib/components'

export const Hero = () => {
  const navigateTo = useNavigateTo()
  const activePatternId = usePatternsStore(state => state.activePatternId)

  return (
    <Flex columnGap="md" rowGap="xl" alignItems="center" flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}>
      <Flex.Item flex="1">
        <Text typography="h5">
          React UI system built on composition and prop inheritance, with strict rules governing component appearance and
          behavior. Designed to reduce UI entropy and keep interfaces consistent and maintainable as products grow over time.
        </Text>
        <Spacer blockSize="lg" />
        <Flex gap="xs" flexWrap="wrap" justifyContent={{ base: 'center', md: 'flex-start' }}>
          <Link
            href={`${PageKey.patterns}?id=${activePatternId}`}
            onClick={() => {
              navigateTo(`${PageKey.patterns}?id=${activePatternId}`)
            }}
          >
            <Button color="blue" intent="primary" iconName="arrow-right" iconPlacement="right" size="sm">
              Explore patterns
            </Button>
          </Link>
          <Link
            href={PageKey.components}
            onClick={() => {
              navigateTo(PageKey.components)
            }}
          >
            <Button variant="ghost" color="blue" intent="primary" iconName="arrow-right" iconPlacement="right" size="sm">
              Browse components
            </Button>
          </Link>
        </Flex>
      </Flex.Item>
      <Flex.Item>
        <Link
          href={PageKey.assistant}
          onClick={() => {
            navigateTo(PageKey.assistant)
          }}
        >
          <Tooltip content="Go to AI assistant" minInlineSize={150} maxInlineSize={250}>
            <Image src="/captain-nebula.webp" inlineSize="225px" blockSize="225px" alt="Captain Nebula" fetchPriority="high" />
          </Tooltip>
        </Link>
      </Flex.Item>
    </Flex>
  )
}
