import { useEffect, useState } from 'react'

import { ComponentMeta } from 'client/definitions'
import { Slide, SlideProps, Text } from 'lib/components'

const SlideWrapper = ({ direction, offset, duration }: Partial<SlideProps>) => {
  const [visible, setVisible] = useState<boolean>(false)
  let interval: NodeJS.Timeout | null = null

  useEffect(() => {
    setVisible(true)
  }, [])

  useEffect(() => {
    interval = setInterval(() => {
      setVisible(!visible)
    }, 2000)

    return () => {
      clearInterval(interval)
      interval = null
    }
  }, [visible])

  return (
    <Slide visible={visible} direction={direction} offset={offset} duration={duration}>
      <Text intent="neutral" noWrap>
        Animated content.
      </Text>
    </Slide>
  )
}

const SLIDE_EXAMPLES_META: ComponentMeta<SlideProps>['examples'] = [
  {
    jsx: <SlideWrapper direction="left" offset="200px" />,
    code: `<Slide visible={visible} direction="left" offset="200px">
  <Text intent="neutral" noWrap>
    Animated content.
  </Text>
</Slide>`,
  },
]

export { SLIDE_EXAMPLES_META }
