import { useEffect, useRef, useState } from 'react'

import { useFade } from 'lib/components/pro/useFade'
import { Box } from 'lib/index.core'
import { type DocExample } from 'client/definitions'

const FadeWrapper = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const tagRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setVisible(visible => !visible)

    const interval = setInterval(() => {
      setVisible(visible => !visible)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useFade({ tagRef, visible, duration: 1000 })

  return (
    <Box tagRef={tagRef} drawable borderMode="filled" intent="primary" padding="20px">
      Fade content
    </Box>
  )
}

export const USE_FADE_EXAMPLES: DocExample[] = [
  {
    description: 'Fade transition controlled by the `visible` argument.',
    jsx: <FadeWrapper />,
    code: `const tagRef = useRef(null)

useFade({ tagRef, visible })

return (
  <Box tagRef={tagRef} drawable borderMode="filled" intent="primary" padding="20px">
    Fade content
  </Box>
)`,
  },
]
