import { Box, MarkerList, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>A Box can act as a local styling boundary.</Text>
      <Spacer />
      <MarkerList>
        <MarkerList.Item>
          <Text>Theme and brand can be flipped locally</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>All drawable descendants follow automatically</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>Global settings remain unchanged</Text>
        </MarkerList.Item>
      </MarkerList>
      <Spacer />
      <Text>
        Different combinations of theme and brand can be nested. Each Box and its contents use the nearest theme and brand
        settings defined around them, without affecting the rest of the layout.
      </Text>
    </Box>
  )
}
