import { useJoinedSurfaceStyle } from 'lib/hooks'
import { Box, BoxProps, Button, NEB_LENGTH } from 'lib/index.core'

export const JoinedActionGroup = () => {
  const getJoinedSurfaceStyle = useJoinedSurfaceStyle({
    count: 2,
    // squared: true,
  })

  const intent: BoxProps['intent'] = 'primary'

  return (
    <Box theme="dark">
      <Button intent="neutral">Button</Button>
    </Box>
  )

  // return (
  //   <Box
  //     drawable
  //     variant="solid"
  //     intent={intent}
  //     surface="lowered"
  //     display="inline-flex"
  //     gap={NEB_LENGTH.px_002}
  //     // borderRadius={NEB_LENGTH.px_000}
  //     overflow="hidden"
  //   >
  //     <Box
  //       tag="button"
  //       cursor="pointer"
  //       interactive
  //       variant="solid"
  //       intent={intent}
  //       padding={NEB_LENGTH.px_012}
  //       {...getJoinedSurfaceStyle(0)}
  //     >
  //       Box 1
  //     </Box>
  //     <Box
  //       tag="button"
  //       cursor="pointer"
  //       interactive
  //       variant="solid"
  //       intent={intent}
  //       padding={NEB_LENGTH.px_012}
  //       {...getJoinedSurfaceStyle(1)}
  //     >
  //       Box 2
  //     </Box>
  //   </Box>
  // )
}
