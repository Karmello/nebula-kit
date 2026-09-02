import { BoxIntent, BoxSurfaceDepth } from 'lib/components/core/Box'
import { JoinedSurface } from 'lib/components/shared'
import { Box, NEB_LENGTH } from 'lib/index.core'

export const JoinedActionGroup = () => {
  const surfaceDepth: BoxSurfaceDepth = 'raised'
  const intent: BoxIntent = 'strong'

  return (
    <JoinedSurface
      flexDirection="row"
      color="blue"
      bordered
      squared
      //
      bg="tinted"
      border="tinted"
      surfaceDepth={surfaceDepth}
      intent={intent}
    >
      <Box padding={NEB_LENGTH.px_024}>Box</Box>
      <Box padding={NEB_LENGTH.px_024}>Box</Box>
      <Box
        padding={NEB_LENGTH.px_024}
        drawable
        intent={intent}
        color="blue"
        surfaceDepth={surfaceDepth}
        bg="tinted"
        bgRole="selection"
        borderRadius={NEB_LENGTH.px_000}
      >
        Selection
      </Box>
    </JoinedSurface>
    // <Box drawable bg="filled" color="blue" intent="strong" padding={NEB_LENGTH.px_064}>
    //   <Box drawable bg="filled" color="blue" intent="primary" padding={NEB_LENGTH.px_064}>
    //     <Box drawable bg="filled" color="blue" intent="secondary" padding={NEB_LENGTH.px_064}>
    //       <Box drawable bg="filled" color="blue" intent="tertiary" padding={NEB_LENGTH.px_064}>
    //         <Box drawable bg="filled" color="blue" intent="muted" padding={NEB_LENGTH.px_064}>
    //           <Box drawable bg="filled" color="blue" intent="neutral" padding={NEB_LENGTH.px_064} />
    //         </Box>
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
  )
}
