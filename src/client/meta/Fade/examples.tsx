import { useEffect, useState } from 'react'

import { ComponentMeta } from 'client/definitions'
import { Fade, FadeProps, Box } from 'lib/components'

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

const FADE_EXAMPLES_META: ComponentMeta<FadeProps>['examples'] = [
  {
    description: 'Fade transition controlled by `visible` prop.',
    jsx: (
      <FadeWrapper>
        <Box drawable variant="outline" intent="primary" padding="20px">
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

export { FADE_EXAMPLES_META }
