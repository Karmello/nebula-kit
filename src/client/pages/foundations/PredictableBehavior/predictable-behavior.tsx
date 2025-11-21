import { Box, Text, MarkerList, Spacer } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        NebulaKit is built so that components never surprise you. Each one responds to props, states and
        themes through shared logic, not isolated implementations. What happens in one part of the system
        happens the same way everywhere else.
      </Text>
      <Spacer blockSize={15} />
      <Text>
        Interactivity, motion and responsive layout are all handled by unified mechanisms. Animations rely on
        the same sizing and color variables that drive static states. Breakpoints follow the same responsive
        props used across every component.
      </Text>
      <Spacer blockSize={15} />
      <Text>
        This alignment means a single mental model covers the entire library. When you understand one
        component, you already understand the rest.
      </Text>
      <Spacer blockSize={30} />
      <Text>Predictable behavior means:</Text>
      <Spacer blockSize={15} />
      <MarkerList>
        <MarkerList.Item>
          <Text bold>Shared logic, shared outcome.</Text>
          <Text>
            The same input always produces the same result, regardless of context or component type.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>State is transparent.</Text>
          <Text>
            Hover, focus and active states use common patterns. Visual feedback behaves consistently, not
            contextually.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Responsiveness is systemic.</Text>
          <Text>
            Layout and motion respond through the same responsive variables, not custom breakpoints or ad-hoc
            CSS.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Learning scales.</Text>
          <Text>
            Every new component feels familiar because the rules never shift - complexity adds depth, not
            confusion.
          </Text>
        </MarkerList.Item>
      </MarkerList>
      <Spacer blockSize={30} />
      <Text>
        Predictability isn't just about stability - it's about trust. You can modify, extend and animate
        without fear of breaking the system because it behaves exactly the way it says it will.
      </Text>
    </Box>
  )
}
