import { useEffect, useState } from 'react'

import { Box } from 'lib/index.core'
import { Fade, FadeProps } from 'lib/index.pro'
import { type DocExample } from 'client/definitions'

const FadeWrapper = ({ children }: Partial<FadeProps>) => {
  const [visible, setVisible] = useState<boolean>(false)
  let interval: NodeJS.Timeout | null = null

  useEffect(() => {
    setVisible(visible => !visible)

    interval = setInterval(() => {
      setVisible(visible => !visible)
    }, 2000)

    return () => {
      clearInterval(interval)
      interval = null
    }
  }, [])

  return (
    <Fade visible={visible} duration={1000}>
      {children}
    </Fade>
  )
}

export const FADE_EXAMPLES: DocExample[] = [
  {
    description: 'Fade transition controlled by `visible` prop.',
    jsx: (
      <FadeWrapper>
        <Box
          drawable
          // variant="outline"
          intent="primary"
          padding="20px"
        >
          Fade content
        </Box>
      </FadeWrapper>
    ),
    code: `<Fade visible={visible}>
  <Box drawable variant="outline" intent="primary" padding="20px">
    Fade content
  </Box>
</Fade>`,
  },
]
