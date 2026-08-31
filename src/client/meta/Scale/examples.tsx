import { useState } from 'react'

import { Box, Button } from 'lib/index.core'
import { Scale } from 'lib/index.pro'
import { type DocExample } from 'client/definitions'

const Example1 = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button onClick={() => setVisible(value => !value)}>Toggle scale</Button>
      <Scale visible={visible}>
        <Box drawable bg="filled" intent="primary" padding="24px">
          Scaled content
        </Box>
      </Scale>
    </>
  )
}

export const SCALE_EXAMPLES: DocExample[] = [
  {
    description: 'Scale transition controlled by `visible` prop.',
    jsx: <Example1 />,
    code: `<Scale visible={visible}>
  <Box drawable variant="solid" intent="primary" padding="24px" marginLeft="16px">
    Scaled content
  </Box>
</Scale>`,
  },
]
