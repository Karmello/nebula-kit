import { Box, MarkerList, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text typography="h6">Who it's for</Text>
      <Spacer blockSize={10} />
      <MarkerList intent="neutral">
        <MarkerList.Item>
          <Text>Product teams that want a coherent, ready-to-use look out of the box</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>Developers who value predictable APIs and fewer decisions</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>Apps that need to scale without design drift</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>People who want to build features, not fight styling</Text>
        </MarkerList.Item>
      </MarkerList>
      <Spacer blockSize={30} />
      <Text typography="h6">Who it's not for</Text>
      <Spacer blockSize={10} />
      <MarkerList intent="neutral">
        <MarkerList.Item>
          <Text>Brands that need to restyle every atom or rebuild design patterns</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>Projects where visual novelty outweighs consistency</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>Teams looking for a theme engine more than a system</Text>
        </MarkerList.Item>
      </MarkerList>
    </Box>
  )
}
