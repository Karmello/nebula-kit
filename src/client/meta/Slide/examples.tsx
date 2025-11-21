import { cloneElement, ReactElement, useEffect, useState } from 'react'

import { ComponentMeta } from 'client/definitions'
import { Box, Flex, Slide, SlideProps, Text } from 'lib/components'

const SlideWrapper = ({ children }: { children: ReactElement }) => {
  const [visible, setVisible] = useState<boolean>(false)
  let interval: NodeJS.Timeout | null = null

  useEffect(() => {
    setVisible(true)
  }, [])

  useEffect(() => {
    interval = setInterval(() => {
      setVisible(!visible)
    }, 1000)

    return () => {
      clearInterval(interval)
      interval = null
    }
  }, [visible])

  return cloneElement(children as any, { visible })
}

const SLIDE_EXAMPLES_META: ComponentMeta<SlideProps>['examples'] = [
  {
    description: 'Sliding in from the left.',
    jsx: (
      <SlideWrapper>
        <Slide visible={false} property="left" duration={1000}>
          <Box variant="outline" intent="secondary" color="blue">
            Animated content.
          </Box>
        </Slide>
      </SlideWrapper>
    ),
    code: `<Slide visible={visible} property="left" duration={1000}>
  <Box variant="outline" intent="secondary" color="blue">
    Animated content.
  </Box>
</Slide>`,
    sandBoxWithNoPadding: true,
  },
  {
    description: 'Sliding in from the right.',
    jsx: (
      <Box overflowX="hidden">
        <Flex justifyContent="flex-end">
          <SlideWrapper>
            <Slide visible={false} property="right" duration={1000}>
              <Box variant="outline" intent="secondary" color="blue">
                Animated content.
              </Box>
            </Slide>
          </SlideWrapper>
        </Flex>
      </Box>
    ),
    code: `<Slide visible={visible} property="right" duration={1000}>
  <Box variant="outline" intent="secondary" color="blue">
    Animated content.
  </Box>
</Slide>`,
    sandBoxWithNoPadding: true,
  },
  {
    description: 'Sliding in from the top.',
    jsx: (
      <SlideWrapper>
        <Slide visible={false} property="top" duration={1000}>
          <Box variant="outline" intent="secondary" color="blue">
            Animated content.
          </Box>
        </Slide>
      </SlideWrapper>
    ),
    code: `<Slide visible={visible} property="top" duration={1000}>
  <Box variant="outline" intent="secondary" color="blue">
    Animated content.
  </Box>
</Slide>`,
    sandBoxWithNoPadding: true,
  },
]

export { SLIDE_EXAMPLES_META }
