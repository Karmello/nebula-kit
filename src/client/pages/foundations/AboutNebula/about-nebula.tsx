import { Flex, Text } from 'lib/components'

export default () => {
  return (
    <Flex flexDirection="column" gap={10}>
      <Text maxInlineSize="100ch">
        Nebula-kit is a React UI library built with a focus on clarity and restraint. It provides a set of
        primitives and components that map closely to the web platform, exposing just the right CSS properties
        through props so you can stay productive without losing control.
      </Text>
      <Text maxInlineSize="100ch">
        The project is guided by a simple principle: avoid over-engineering while still enabling functional,
        responsive, and accessible interfaces. Components inherit from a small set of core building blocks,
        which keeps the system consistent and easy to reason about as it grows.
      </Text>
      <Text maxInlineSize="100ch">
        Whether you are building custom layouts, styling surfaces, or composing higher-level elements,
        Nebula-kit gives you a predictable foundation designed to scale with your needs.
      </Text>
    </Flex>
  )
}
