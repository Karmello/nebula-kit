import { Box, Text, MarkerList, Spacer } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        NebulaKit begins with a single rule -
        <Text tag="span" bold space="both">
          every component grows from the same core primitives.
        </Text>
        There are no exceptions, no hidden styling layers, no one-off solutions.
      </Text>
      <Spacer blockSize={15} />
      <Text>
        <Text tag="span" bold space="end">
          Box
        </Text>
        draws surfaces and handles color, radius and state.
        <Text tag="span" bold space="both">
          Flex, Grid, Table
        </Text>
        arrange space and rhythm.
        <Text tag="span" bold space="both">
          Text
        </Text>
        handles typography and inline behavior. Everything else is composed from these few elements.
      </Text>
      <Spacer blockSize={30} />
      <Text>This shared foundation means:</Text>
      <Spacer blockSize={15} />
      <MarkerList>
        <MarkerList.Item>
          <Text bold>Consistency emerges naturally.</Text>
          <Text>
            Visual and behavioral patterns repeat because they originate from the same logic, not because
            they're enforced by documentation.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Maintenance stays simple.</Text>
          <Text>
            When a primitive evolves, every higher-order component adapts automatically. Updates flow through
            the structure instead of being patched in each layer.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Code and design stay aligned.</Text>
          <Text>
            Designers and developers speak the same vocabulary - the primitives reflect the visual language
            directly.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>No component stands alone.</Text>
          <Text>
            There's no isolated widget culture here. Everything participates in the same ecosystem of
            surfaces, layouts and motion.
          </Text>
        </MarkerList.Item>
      </MarkerList>
      <Spacer blockSize={30} />
      <Text>
        The result is a framework where new pieces don't compete with old ones - they extend them. This is
        what makes NebulaKit feel cohesive even as it grows - one foundation, many expressions.
      </Text>
    </Box>
  )
}
