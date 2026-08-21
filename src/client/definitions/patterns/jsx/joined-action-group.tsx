import { Box, NEB_LENGTH, Text } from '@nebula-kit/core'

export const JoinedActionGroup = () => {
  return (
    <Box
      drawable
      variant="outline"
      intent="secondary"
      color="blue"
      inlineSize={NEB_LENGTH.px_512}
      maxInlineSize="100%"
      blockSize={NEB_LENGTH.px_512}
      borderRadius={NEB_LENGTH.px_000}
    >
      <Box drawable variant="solid" intent="muted" color="blue" inlineSize="100%" blockSize="100%">
        <Box
          drawable
          variant="solid"
          intent="tertiary"
          color="blue"
          inlineSize="100%"
          blockSize={NEB_LENGTH.px_064}
          borderRadius={NEB_LENGTH.px_000}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text>Hello !</Text>
        </Box>
      </Box>
    </Box>
  )
}
