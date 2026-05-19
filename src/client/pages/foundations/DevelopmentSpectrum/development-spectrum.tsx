import { Box, Divider, Flex, Icon, MarkerList, Spacer, Text, WithIcon } from 'lib/components'

export default () => {
  return (
    <>
      <Text>
        Modern frontend development no longer follows a single approach. Different workflows optimize for different priorities -
        from absolute control to maximum speed and automation. The spectrum below illustrates where NebulaKit sits within that
        landscape and the tradeoffs each direction tends to introduce.
      </Text>
      <Spacer blockSize="xl" />
      <Box overflowX="auto">
        <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems="center" gap="sm">
          <Flex.Item flex="1">
            <Box drawable variant="outline" intent="secondary" color="red" minInlineSize="300px">
              <Box drawable variant="solid" intent="muted" color="red" padding="md">
                <Text typography="h5" intent="primary" color="red">
                  Building from scratch
                </Text>
                <Divider surface="dividing" marginTop="xs" marginBottom="sm" color="red" />
                <Text italic>
                  Building interfaces largely by hand using raw HTML, CSS or frameworks built directly on top of them while
                  manually assembling layouts, accessibility and reusable component architecture.
                </Text>
                <Spacer />
                <WithIcon iconName="arrow-up" iconColor="red" iconIntent="primary">
                  <Text>maximum control, precise customization</Text>
                </WithIcon>
                <Spacer blockSize="sm" />
                <WithIcon iconName="arrow-down" iconColor="red" iconIntent="primary">
                  <Text>higher cognitive load, slow development, repetitive work</Text>
                </WithIcon>
              </Box>
            </Box>
          </Flex.Item>
          <Flex.Item>
            <Icon name={{ base: 'arrow-down', md: 'arrow-right' }} size="md" />
          </Flex.Item>
          <Flex.Item flex="1">
            <Box drawable variant="outline" intent="secondary" color="blue" minInlineSize="300px">
              <Box drawable variant="solid" intent="muted" color="blue" padding="md">
                <Text typography="h5" intent="primary" color="blue">
                  Using NebulaKit
                </Text>
                <Divider surface="dividing" marginTop="xs" marginBottom="sm" color="blue" />
                <Text italic>
                  Building interfaces through a structured component system that reduces repetitive implementation work while
                  preserving consistency, composability and architectural clarity.
                </Text>
                <Spacer />
                <WithIcon iconName="arrow-up" iconColor="blue" iconIntent="primary">
                  <Text>
                    predictable architecture, structured development, reduced cognitive load, fast composition, long-term
                    maintainability
                  </Text>
                </WithIcon>
                <Spacer blockSize="sm" />
                <WithIcon iconName="arrow-down" iconColor="blue" iconIntent="primary">
                  <Text>opinionated architecture, constrained flexibility</Text>
                </WithIcon>
              </Box>
            </Box>
          </Flex.Item>
          <Flex.Item>
            <Icon name={{ base: 'arrow-down', md: 'arrow-right' }} size="md" />
          </Flex.Item>
          <Flex.Item flex="1">
            <Box drawable variant="outline" intent="secondary" color="red" minInlineSize="300px">
              <Box drawable variant="solid" intent="muted" color="red" padding="md">
                <Text typography="h5" intent="primary" color="red">
                  AI-driven development
                </Text>
                <Divider surface="dividing" marginTop="xs" marginBottom="sm" color="red" />
                <Text italic>
                  Building interfaces through large-scale automatically generated code where much of the implementation and
                  interface assembly is delegated directly to AI systems.
                </Text>
                <Spacer />
                <WithIcon iconName="arrow-up" iconColor="red" iconIntent="primary">
                  <Text>low upfront effort, fast iteration, instant output</Text>
                </WithIcon>
                <Spacer blockSize="sm" />
                <WithIcon iconName="arrow-down" iconColor="red" iconIntent="primary">
                  <Text>inconsistent patterns, difficult maintenance, growing entropy, 80% wall</Text>
                </WithIcon>
              </Box>
            </Box>
          </Flex.Item>
        </Flex>
      </Box>
    </>
  )
}
