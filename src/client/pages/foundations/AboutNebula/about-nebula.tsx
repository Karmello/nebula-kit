import { Box, Flex, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap={10}>
        <Text>
          Nebula-kit is a React UI library built with a focus on clarity and restraint. It provides a set of
          primitives and components that map closely to the web platform, exposing just the right CSS
          properties through props so you can stay productive without losing control.
        </Text>
        <Text>
          The project is guided by a simple principle: avoid over-engineering while still enabling functional,
          responsive, and accessible interfaces. Components inherit from a small set of core building blocks,
          which keeps the system consistent and easy to reason about as it grows.
        </Text>
        <Text>
          Whether you are building custom layouts, styling surfaces, or composing higher-level elements,
          Nebula-kit gives you a predictable foundation designed to scale with your needs.
        </Text>
      </Flex>
    </Box>
  )
}
