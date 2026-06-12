import { Box, Divider, Flex, Icon, Spacer, Text, Title } from 'lib/components'

export default () => {
  return (
    <>
      <Text>
        Modern frontend development no longer follows a single approach. Different workflows optimize for different priorities -
        from absolute control to maximum speed and automation. The spectrum below illustrates where NebulaKit sits within that
        landscape and the tradeoffs each direction tends to introduce.
      </Text>
      <Spacer blockSize="48px" />
      <Box overflowX="auto">
        <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems="center" gap="16px">
          <Flex.Item flex="1">
            <Box drawable variant="outline" intent="secondary" color="red" minInlineSize="300px">
              <Box drawable variant="solid" intent="muted" color="red" padding="24px">
                <Text typography="h5" intent="primary" color="red">
                  Building from scratch
                </Text>
                <Divider marginTop="8px" marginBottom="16px" color="red" />
                <Text italic>
                  Building interfaces largely by hand using raw HTML, CSS or frameworks built directly on top of them while
                  manually assembling layouts, accessibility and reusable component architecture.
                </Text>
                <Spacer />
                <Title iconName="arrow-up" color="red" intent="primary">
                  maximum control, precise customization
                </Title>
                <Spacer blockSize="16px" />
                <Title iconName="arrow-down" color="red" intent="primary">
                  higher cognitive load, slow development, repetitive work
                </Title>
              </Box>
            </Box>
          </Flex.Item>
          <Flex.Item>
            <Icon name={{ base: 'arrow-down', md: 'arrow-right' }} size="24px" />
          </Flex.Item>
          <Flex.Item flex="1">
            <Box drawable variant="outline" intent="secondary" color="blue" minInlineSize="300px">
              <Box drawable variant="solid" intent="muted" color="blue" padding="24px">
                <Text typography="h5" intent="primary" color="blue">
                  Using NebulaKit
                </Text>
                <Divider marginTop="8px" marginBottom="16px" color="blue" />
                <Text italic>
                  Building interfaces through a structured component system that reduces repetitive implementation work while
                  preserving consistency, composability and architectural clarity.
                </Text>
                <Spacer />
                <Title iconName="arrow-up" color="blue" intent="primary">
                  predictable architecture, structured development, reduced cognitive load, fast composition, long-term
                  maintainability
                </Title>
                <Spacer blockSize="16px" />
                <Title iconName="arrow-down" color="blue" intent="primary">
                  opinionated architecture, constrained flexibility
                </Title>
              </Box>
            </Box>
          </Flex.Item>
          <Flex.Item>
            <Icon name={{ base: 'arrow-down', md: 'arrow-right' }} size="24px" />
          </Flex.Item>
          <Flex.Item flex="1">
            <Box drawable variant="outline" intent="secondary" color="red" minInlineSize="300px">
              <Box drawable variant="solid" intent="muted" color="red" padding="24px">
                <Text typography="h5" intent="primary" color="red">
                  AI-driven development
                </Text>
                <Divider marginTop="8px" marginBottom="16px" color="red" />
                <Text italic>
                  Building interfaces through large-scale automatically generated code where much of the implementation and
                  interface assembly is delegated directly to AI systems.
                </Text>
                <Spacer />
                <Title iconName="arrow-up" color="red" intent="primary">
                  low upfront effort, fast iteration, instant output
                </Title>
                <Spacer blockSize="16px" />
                <Title iconName="arrow-down" color="red" intent="primary">
                  inconsistent patterns, difficult maintenance, growing entropy, 80% wall
                </Title>
              </Box>
            </Box>
          </Flex.Item>
        </Flex>
      </Box>
    </>
  )
}
