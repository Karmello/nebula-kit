import { useRef } from 'react'

import { Box } from 'lib/components'
import { Portal } from 'lib/components/shared'

export const Test = () => {
  const anchorRef = useRef(null)

  return (
    <>
      <Box tagRef={anchorRef} display="inline-block" drawable variant="solid" intent="primary">
        Anchor
      </Box>
      <Portal anchorRef={anchorRef} placement="bottom-center">
        <Box drawable variant="outline" intent="primary">
          hello
        </Box>
      </Portal>
    </>
  )
}
