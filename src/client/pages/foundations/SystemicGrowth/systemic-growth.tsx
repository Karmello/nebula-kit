import { Box, Text, MarkerList, Spacer } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        Nebula Kit scales the same way it's built - through composition. Higher-order components extend
        existing logic instead of rewriting it. Each layer inherits the behavior and structure of the layer
        beneath it.
      </Text>
      <Spacer blockSize={15} />
      <Text>
        This approach creates a system that grows without fracturing. Buttons, layouts and forms all originate
        from the same principles that shape the primitives.
      </Text>
      <Spacer blockSize={15} />
      <Text>
        When you build a new component with Nebula Kit, you're not creating a separate pattern - you're
        extending an existing one.
      </Text>
      <Spacer blockSize={30} />
      <Text>Systemic growth means:</Text>
      <Spacer blockSize={15} />
      <MarkerList>
        <MarkerList.Item>
          <Text bold>Consistency expands, not erodes.</Text>
          <Text>Every addition reinforces the design language instead of diluting it.</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Updates flow upward.</Text>
          <Text>
            Changes in primitives automatically ripple through higher layers, keeping everything in sync.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Complexity stays organized.</Text>
          <Text>
            Composition makes growth predictable - the more the system evolves, the clearer its structure
            becomes.
          </Text>
        </MarkerList.Item>
      </MarkerList>
      <Spacer blockSize={30} />
      <Text>
        By treating scale as a continuation of structure, Nebula Kit keeps expansion from becoming chaos. It's
        a system that can keep growing without losing itself.
      </Text>
    </Box>
  )
}
