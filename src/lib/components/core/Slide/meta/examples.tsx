import { cloneElement, ReactElement, useEffect, useState } from 'react'

import { Slide, Text } from 'lib/index.core'
import { type Example } from 'client/definitions'

import { Box } from '../../Box'

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

export const SLIDE_EXAMPLES: Example[] = [
  {
    description: 'Sliding in from the left.',
    jsx: (
      <SlideWrapper>
        <Slide visible={false} from="left" duration={1000}>
          <Text>Animated content.</Text>
        </Slide>
      </SlideWrapper>
    ),
    code: `<Slide visible={visible} from="left" duration={1000}>
  <Text>Animated content.</Text>
</Slide>`,
    sandBoxWithNoPadding: true,
  },
  {
    description: 'Sliding in from the right.',
    jsx: (
      <Box display="flex" justifyContent="flex-end">
        <Box overflowX="hidden">
          <SlideWrapper>
            <Slide visible={false} from="right" duration={1000}>
              <Text>Animated content.</Text>
            </Slide>
          </SlideWrapper>
        </Box>
      </Box>
    ),
    code: `<Slide visible={visible} from="right" duration={1000}>
  <Text>Animated content.</Text>
</Slide>`,
    sandBoxWithNoPadding: true,
  },
  {
    description: 'Sliding in from the top.',
    jsx: (
      <Box overflowX="hidden">
        <SlideWrapper>
          <Slide visible={false} from="top" duration={1000}>
            <Text>Animated content.</Text>
          </Slide>
        </SlideWrapper>
      </Box>
    ),
    code: `<Slide visible={visible} from="top" duration={1000}>
  <Text>
    Animated content.
  </Text>
</Slide>`,
    sandBoxWithNoPadding: true,
  },
]
