import { Box, Button, Flex, NEB_LENGTH, Spacer, Text } from '@nebula-kit/core'

export const StylingIsland = () => {
  return (
    <Box
      drawable
      theme="global-flipped"
      brand="red"
      variant="solid"
      intent="neutral"
      padding={NEB_LENGTH.px_048}
    >
      <Text typography="h4">Styling island</Text>
      <Text intent="primary">Flipped global app theme and red brand.</Text>
      <Spacer />
      <Flex gap={NEB_LENGTH.px_008} flexWrap="wrap">
        <Button intent="primary">Solid button</Button>
        <Button variant="outline">Outline button</Button>
      </Flex>
    </Box>
  )
}
