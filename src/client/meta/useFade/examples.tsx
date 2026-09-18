import { useEffect, useRef, useState } from 'react'

import { useFade } from 'lib/components/pro/useFade'
import { Box } from 'lib/index.core'
import { type DocExample } from 'client/definitions'

const FadeWrapper = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setVisible(visible => !visible)

    const interval = setInterval(() => {
      setVisible(visible => !visible)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useFade({ ref, visible, duration: 1000 })

  return (
    <Box elemRef={ref} drawable borderMode="filled" intent="primary" padding="20px">
      Fade content
    </Box>
  )
}

export const USE_FADE_EXAMPLES: DocExample[] = [
  {
    description: 'Fade transition controlled by the `visible` argument.',
    jsx: <FadeWrapper />,
    code: `const ref = useRef(null)

useFade({ ref, visible })

return (
  <Box elemRef={ref} drawable borderMode="filled" intent="primary" padding="20px">
    Fade content
  </Box>
)`,
  },
]
