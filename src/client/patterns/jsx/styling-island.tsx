import { Box, Button, HorizontalRule, NEB_LENGTH, StylingIsland, Text } from '@nebula-kit/core'

export const Pattern = () => {
  return (
    <StylingIsland theme="global-flipped" brand="blue">
      <Box drawable bgMode="filled" intent="neutral" padding={NEB_LENGTH.px_024}>
        <Text typography="h5" intent="primary">
          Heading text
        </Text>
        <HorizontalRule marginBottom={NEB_LENGTH.px_016} />
        <Button intent="primary">Button</Button>
      </Box>
    </StylingIsland>
  )
}
