import { Box, Flex,Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap="sm">
        <Text>
          Inheritance is another powerful concept that NebulaKit takes advantage of. Whenever composition happens - meaning one
          component reuses another - underlying props may be forwarded outward when the reused component's abstraction remains
          conceptually visible in the public API. In those cases, forwarded props keep their original names instead of being
          renamed or redefined, which keeps the system predictable and makes composed components easier to understand by looking
          at their props alone.
        </Text>
        <Text>
          However, NebulaKit does not expose implementation details that are not part of the component's conceptual role. Internal
          composition may rely on lower-level primitives under the hood, but only the behaviors that make sense for the component
          itself become part of the public API. This keeps APIs aligned with how components are actually understood and used,
          rather than leaking underlying implementation mechanics.
        </Text>
        <Text>
          As a result, it becomes possible to learn how the system works quickly. If you understand the functionality of a
          primitive being reused and that abstraction remains visible, you already know how the component built on top of it will
          behave.
        </Text>
      </Flex>
    </Box>
  )
}
