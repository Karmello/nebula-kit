import { useEffect, useState } from 'react'

import { ComponentMeta } from 'client/definitions'
import { Fade, Text, FadeProps } from 'lib/components'

const FadeWrapper = ({ children }: Partial<FadeProps>) => {
  const [visible, setVisible] = useState<boolean>(false)
  let interval: NodeJS.Timeout | null = null

  useEffect(() => {
    interval = setInterval(() => {
      setVisible(visible => !visible)
    }, 1000)

    return () => {
      clearInterval(interval)
      interval = null
    }
  }, [])

  return <Fade visible={visible}>{children}</Fade>
}

const FADE_EXAMPLES_META: ComponentMeta<FadeProps>['examples'] = [
  {
    description: '...',
    jsx: (
      <FadeWrapper>
        <Text>Text</Text>
      </FadeWrapper>
    ),
    code: `<Fade visible={visible}>
  <Text>Text</Text>
</Fade>`,
  },
]

export { FADE_EXAMPLES_META }
