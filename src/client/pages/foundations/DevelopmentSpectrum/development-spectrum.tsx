import { Box, Divider, Icon, NEB_LENGTH, Spacer, Text, Title } from 'lib/components'

export default () => {
  return (
    <>
      <Text>
        Modern frontend development no longer follows a single approach. Different workflows
        optimize for different priorities - from absolute control to maximum speed and automation.
        The spectrum below illustrates where NebulaKit sits within that landscape and the tradeoffs
        each direction tends to introduce.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Box overflowX="auto">
        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          gap={NEB_LENGTH.px_016}
        >
          <Box flex="1">
            <Box drawable variant="outline" intent="secondary" color="red" minInlineSize="300px">
              <Box drawable variant="solid" intent="muted" color="red" padding={NEB_LENGTH.px_024}>
                <Text typography="h5" intent="primary" color="red">
                  Building from scratch
                </Text>
                <Divider
                  marginTop={NEB_LENGTH.px_008}
                  marginBottom={NEB_LENGTH.px_016}
                  color="red"
                />
                <Text italic>
                  Building interfaces largely by hand using raw HTML, CSS or frameworks built
                  directly on top of them while manually assembling layouts, accessibility and
                  reusable component architecture.
                </Text>
                <Spacer />
                <Title iconName="arrow-up" color="red" intent="primary">
                  maximum control, precise customization
                </Title>
                <Spacer blockSize={NEB_LENGTH.px_016} />
                <Title iconName="arrow-down" color="red" intent="primary">
                  higher cognitive load, slow development, repetitive work
                </Title>
              </Box>
            </Box>
          </Box>
          <Box>
            <Icon name={{ base: 'arrow-down', md: 'arrow-right' }} size={NEB_LENGTH.px_024} />
          </Box>
          <Box flex="1">
            <Box drawable variant="outline" intent="secondary" color="blue" minInlineSize="300px">
              <Box drawable variant="solid" intent="muted" color="blue" padding={NEB_LENGTH.px_024}>
                <Text typography="h5" intent="primary" color="blue">
                  Using NebulaKit
                </Text>
                <Divider
                  marginTop={NEB_LENGTH.px_008}
                  marginBottom={NEB_LENGTH.px_016}
                  color="blue"
                />
                <Text italic>
                  Building interfaces through a structured component system that reduces repetitive
                  implementation work while preserving consistency, composability and architectural
                  clarity.
                </Text>
                <Spacer />
                <Title iconName="arrow-up" color="blue" intent="primary">
                  predictable architecture, structured development, reduced cognitive load, fast
                  composition, long-term maintainability
                </Title>
                <Spacer blockSize={NEB_LENGTH.px_016} />
                <Title iconName="arrow-down" color="blue" intent="primary">
                  opinionated architecture, constrained flexibility
                </Title>
              </Box>
            </Box>
          </Box>
          <Box>
            <Icon name={{ base: 'arrow-down', md: 'arrow-right' }} size={NEB_LENGTH.px_024} />
          </Box>
          <Box flex="1">
            <Box drawable variant="outline" intent="secondary" color="red" minInlineSize="300px">
              <Box drawable variant="solid" intent="muted" color="red" padding={NEB_LENGTH.px_024}>
                <Text typography="h5" intent="primary" color="red">
                  AI-driven development
                </Text>
                <Divider
                  marginTop={NEB_LENGTH.px_008}
                  marginBottom={NEB_LENGTH.px_016}
                  color="red"
                />
                <Text italic>
                  Building interfaces through large-scale automatically generated code where much of
                  the implementation and interface assembly is delegated directly to AI systems.
                </Text>
                <Spacer />
                <Title iconName="arrow-up" color="red" intent="primary">
                  low upfront effort, fast iteration, instant output
                </Title>
                <Spacer blockSize={NEB_LENGTH.px_016} />
                <Title iconName="arrow-down" color="red" intent="primary">
                  inconsistent patterns, difficult maintenance, growing entropy, 80% wall
                </Title>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
