import { Button, Flex, Image, Link, Spacer, Text, Tooltip } from 'lib/components'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { usePatternsStore } from 'client/store'

export const Hero = () => {
  const navigateTo = useNavigateTo()
  const activePatternId = usePatternsStore(state => state.activePatternId)

  return (
    <Flex
      columnGap="24px"
      rowGap="48px"
      alignItems="center"
      flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
    >
      <Flex.Item flex="1">
        <Text typography="h5">
          React UI system designed to minimize interface development effort, letting you focus on application logic while keeping
          products consistent, maintainable and resistant to entropy.
        </Text>
        <Spacer blockSize="48px" />
        <Flex columnGap="8px" rowGap="16px" flexWrap="wrap" justifyContent={{ base: 'center', md: 'flex-start' }}>
          <Link
            href={`${PageKey.foundations}/overview/introduction/why-nebula`}
            onClick={() => {
              navigateTo(`${PageKey.foundations}/overview/introduction/why-nebula`)
            }}
          >
            <Button color="blue" intent="primary" iconName="arrow-right" iconPlacement="right" scale="md">
              Foundations
            </Button>
          </Link>
          <Link
            href={`${PageKey.patterns}?id=${activePatternId}`}
            onClick={() => {
              navigateTo(`${PageKey.patterns}?id=${activePatternId}`)
            }}
          >
            <Button variant="ghost" color="blue" intent="primary" iconName="arrow-right" iconPlacement="right" scale="md">
              Patterns
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
