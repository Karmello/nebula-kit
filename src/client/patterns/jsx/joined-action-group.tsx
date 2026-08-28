import { Box, BoxProps, NEB_LENGTH, SurfaceGroup, Text } from '@nebula-kit/core'

export const JoinedActionGroup = () => {
  const intent: BoxProps['intent'] = 'inverse'

  return (
    <SurfaceGroup
      brand="blue"
      gap={NEB_LENGTH.px_002}
      // squared
      drawable
      variant="solid"
      intent={intent}
      surface="dividing"
    >
      <Box
        tag="button"
        interactive
        ripple
        cursor="pointer"
        variant="solid"
        intent={intent}
        padding={NEB_LENGTH.px_012}
      >
        <Text>Box 1</Text>
      </Box>
      <Box
        tag="button"
        interactive
        ripple
        cursor="pointer"
        variant="solid"
        intent={intent}
        padding={NEB_LENGTH.px_012}
      >
        <Text>Box 2</Text>
      </Box>
      <Box
        tag="button"
        interactive
        ripple
        cursor="pointer"
        variant="solid"
        intent={intent}
        padding={NEB_LENGTH.px_012}
      >
        <Text>Box 3</Text>
      </Box>
    </SurfaceGroup>
  )
}
