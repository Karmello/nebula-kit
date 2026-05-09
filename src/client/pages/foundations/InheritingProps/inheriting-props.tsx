import { Box, Text, Flex } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap="sm">
        <Text>
          Inheritance is another powerful concept that NebulaKit takes advantage of. Whenever composition happens - meaning one
          component reuses another - if it needs to forward some of the underlying component's props outward, it always does so
          through inheritance and never by redefining a new property. If there is no name collision, the forwarded prop keeps its
          original name, which keeps the prop API simple and makes it easy to reason about a composed component's structure and
          behavior just by looking at its props.
        </Text>
        <Text>
          This makes it possible to learn how the system works quickly. If you understand the functionality of a primitive being
          reused, you already know how the component built on top of it will behave.
        </Text>
      </Flex>
    </Box>
  )
}
