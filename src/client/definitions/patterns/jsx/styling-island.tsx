import { Box, Button, Flex, Spacer, Text } from 'lib/components'

export const StylingIsland = () => {
  return (
    <Box drawable theme="flipped" brand="red" variant="solid" intent="neutral" padding="lg">
      <Text typography="h4">Styling island</Text>
      <Text intent="primary">Flipped global app theme and red brand.</Text>
      <Spacer />
      <Flex gap="xs" flexWrap="wrap">
        <Button intent="primary">Solid button</Button>
        <Button variant="outline">Outline button</Button>
      </Flex>
    </Box>
  )
}
