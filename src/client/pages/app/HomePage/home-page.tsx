import { Box, Divider, Flex, LinkButton, Section, Spacer, Text } from 'lib/components'
import { useNavigateTo } from 'client/services'

export const HomePage = () => {
  const navigateTo = useNavigateTo()

  return (
    <Box padding={{ base: 10, lg: 25 }}>
      <Flex flexDirection={{ base: 'column', lg: 'row' }} rowGap={40} columnGap={80}>
        <Flex.Item flex={2}>
          <Text typography="h1" intent="primary">
            NebulaKit
          </Text>
          <Divider />
          <Spacer blockSize={10} />
          <Text typography="h6">
            React UI system built on composition - small, consistent parts combining into larger structures
            with clarity and control. Each component follows the same foundation, producing apps that stay
            predictable, stable, and effortless to scale.
          </Text>
          <Spacer blockSize={10} />
          <LinkButton
            intent="primary"
            iconName="arrow-right"
            size="sm"
            href="/foundations/overview/philosophy/one-foundation"
            onClick={() => {
              navigateTo('/foundations/overview/philosophy/one-foundation')
            }}
          >
            Explore
          </LinkButton>
        </Flex.Item>
        <Flex.Item flex={1}>
          <Flex flexDirection="column" gap={15}>
            <Section heading="One foundation" intent="primary">
              <Text intent="neutral">
                Every component shares the same core primitives. Consistency isn't enforced - it's designed
                in.
              </Text>
            </Section>
            <Section heading="Systemic growth" intent="primary">
              <Text intent="neutral">
                Higher-order components extend existing logic instead of reinventing it. As the system
                expands, elements remain clear and composed.
              </Text>
            </Section>
            <Section heading="Predictable behavior" intent="primary">
              <Text intent="neutral">
                Shared patterns mean fewer surprises - changes flow cleanly through the system.
              </Text>
            </Section>
            <Section heading="Visual coherence" intent="primary">
              <Text intent="neutral">
                Common building blocks keep layout and rhythm consistent across the system.
              </Text>
            </Section>
          </Flex>
        </Flex.Item>
      </Flex>
    </Box>
  )
}
