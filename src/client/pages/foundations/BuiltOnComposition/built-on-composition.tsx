import { Box, Flex, NEB_LENGTH, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap={NEB_LENGTH.px_016}>
        <Text>
          When it comes to functionality, NebulaKit is built purely on component composition. Every meaningful behavior is
          encapsulated as a separate component and exposed to the user as either a primitive or a more complex component. This
          ensures that no duplication happens within the system. Components are simply composed of each other, never rewriting
          existing functionality twice. This means that when a bug is spotted, it needs to be fixed in only one place and
          automatically affects the rest of the system wherever the same behavior is used.
        </Text>
        <Text>
          Composition is very powerful, but when used incorrectly it can cause various issues related to the coupling it creates
          between components. NebulaKit ensures that functionality is always split at the right moment, taking maximum advantage
          of what composition brings while avoiding its common pitfalls.
        </Text>
      </Flex>
    </Box>
  )
}
