import { Box, Divider, Flex, Icon, MarkerList, Spacer, Text } from 'lib/components'

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
            <Box drawable variant="outline" intent="secondary" color="red" minInlineSize="300px" padding="md">
              <Text typography="h5" intent="primary" color="red">
                Building from scratch
              </Text>
              <Divider surface="dividing" marginTop="xs" marginBottom="sm" color="red" />
              <Text color="red" intent="primary" italic>
                Building interfaces largely by hand using raw HTML, CSS or frameworks built directly on top of them while manually
                assembling layouts, accessibility and reusable component architecture.
              </Text>
              <Spacer />
              <MarkerList color="red" intent="primary">
                <MarkerList.Item>
                  <Text>maximum control, precise customization</Text>
                </MarkerList.Item>
                <MarkerList.Item>
                  <Text>higher cognitive load, slow development, repetitive work</Text>
                </MarkerList.Item>
              </MarkerList>
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
                <Text color="blue" intent="primary" italic>
                  Building interfaces through a structured component system that reduces repetitive implementation work while
                  preserving consistency, composability and architectural clarity.
                </Text>
                <Spacer />
                <MarkerList color="blue" intent="primary">
                  <MarkerList.Item>
                    <Text>
                      predictable architecture, structured development, reduced cognitive load, fast composition, long-term
                      maintainability
                    </Text>
                  </MarkerList.Item>
                  <MarkerList.Item>
                    <Text>opinionated architecture, constrained flexibility</Text>
                  </MarkerList.Item>
                </MarkerList>
              </Box>
            </Box>
          </Flex.Item>
          <Flex.Item>
            <Icon name={{ base: 'arrow-down', md: 'arrow-right' }} size="md" />
          </Flex.Item>
          <Flex.Item flex="1">
            <Box drawable variant="outline" intent="secondary" color="red" minInlineSize="300px" padding="md">
              <Text typography="h5" intent="primary" color="red">
                AI-driven development
              </Text>
              <Divider surface="dividing" marginTop="xs" marginBottom="sm" color="red" />
              <Text color="red" intent="primary" italic>
                Building interfaces through large-scale automatically generated code where much of the implementation and
                interface assembly is delegated directly to AI systems.
              </Text>
              <Spacer />
              <MarkerList color="red" intent="primary">
                <MarkerList.Item>
                  <Text>low upfront effort, fast iteration, instant output</Text>
                </MarkerList.Item>
                <MarkerList.Item>
                  <Text>inconsistent patterns, difficult maintenance, growing entropy, 80% wall</Text>
                </MarkerList.Item>
              </MarkerList>
            </Box>
          </Flex.Item>
        </Flex>
      </Box>
    </>
  )
}
