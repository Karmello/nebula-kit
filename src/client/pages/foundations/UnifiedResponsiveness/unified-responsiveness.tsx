import { Box, Flex, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap="16px">
        <Text>
          Just like Box's drawing capabilities, responsiveness is also centralized, implemented once and reused by multiple
          components. The model enforces very predictable behavior. When a prop is responsive, it can receive either a single
          value or an object with separate values for individual breakpoints. You do not need to define values for all
          breakpoints.
        </Text>
        <Text>
          Providing a value for a specific breakpoint automatically applies that value to all following breakpoints. In other
          words, when you set a breakpoint value, you set it for all breakpoints above it. Resetting values is not allowed, if you
          want a breakpoint to behave differently, you must explicitly provide a new value for it. This model is intentionally
          simple and helps prevent many common bugs related to responsiveness in user interfaces.
        </Text>
        <Text>
          In reality, under the hood, NebulaKit does not use CSS media queries to achieve responsive layouts. Responsiveness is
          driven entirely through React hooks and custom logic that determines breakpoint precedence and resolves the final
          values.
        </Text>
      </Flex>
    </Box>
  )
}
