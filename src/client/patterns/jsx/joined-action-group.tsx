import { Box, NEB_LENGTH, Text } from '@nebula-kit/core'

export const JoinedActionGroup = () => {
  return (
    <Box
      drawable
      brand="blue"
      display="flex"
      gap={NEB_LENGTH.px_002}
      inlineSize={NEB_LENGTH.px_512}
      variant="solid"
      intent="muted"
      color="blue"
      overflow="hidden"
    >
      <Box
        tag="button"
        drawable
        flex="1"
        variant="solid"
        intent="tertiary"
        padding={NEB_LENGTH.px_012}
        borderRadius={NEB_LENGTH.px_000}
        interactive
        cursor="pointer"
      >
        <Text>Item 1</Text>
      </Box>
      <Box
        tag="button"
        drawable
        flex="1"
        variant="solid"
        intent="tertiary"
        padding={NEB_LENGTH.px_012}
        borderRadius={NEB_LENGTH.px_000}
        interactive
        cursor="pointer"
      >
        <Text>Item 2</Text>
      </Box>
      <Box
        tag="button"
        drawable
        flex="1"
        variant="solid"
        intent="tertiary"
        padding={NEB_LENGTH.px_012}
        borderRadius={NEB_LENGTH.px_000}
        interactive
        cursor="pointer"
      >
        <Text>Item 3</Text>
      </Box>
    </Box>
  )
}
