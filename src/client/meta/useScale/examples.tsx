import { useRef, useState } from 'react'

import { useScale } from 'lib/components/pro/useScale'
import { Box, Button } from 'lib/index.core'
import { type DocExample } from 'client/definitions'

const Example1 = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useScale({ ref, visible })

  return (
    <>
      <Button onClick={() => setVisible(value => !value)}>Toggle scale</Button>
      <Box tagRef={ref} display="inline-block">
        <Box drawable bgMode="filled" intent="primary" padding="24px">
          Scaled content
        </Box>
      </Box>
    </>
  )
}

export const USE_SCALE_EXAMPLES: DocExample[] = [
  {
    description: 'Scale transition controlled by the `visible` argument.',
    jsx: <Example1 />,
    code: `const ref = useRef(null)

useScale({ ref, visible })

return (
  <Box tagRef={ref} display="inline-block">
    <Box drawable bgMode="filled" intent="primary" padding="24px">
      Scaled content
    </Box>
  </Box>
)`,
  },
]
