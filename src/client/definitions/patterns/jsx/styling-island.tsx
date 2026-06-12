import { Box, Button, Flex, Spacer, Text } from '@nebula-kit/core'

export const StylingIsland = () => {
  return (
    <Box drawable theme="global-flipped" brand="red" variant="solid" intent="neutral" padding="48px">
      <Text typography="h4">Styling island</Text>
      <Text intent="primary">Flipped global app theme and red brand.</Text>
      <Spacer />
      <Flex gap="8px" flexWrap="wrap">
        <Button intent="primary">Solid button</Button>
        <Button variant="outline">Outline button</Button>
      </Flex>
    </Box>
  )
}
