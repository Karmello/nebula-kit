import { cloneElement, ReactElement, useEffect, useState } from 'react'

import { ComponentMeta } from 'client/definitions'

import { type SlideProps } from '../definitions'
import { Slide } from '../slide'
import { Box } from '../../Box'
import { Flex } from '../../Flex'
import { Text } from '../../Text'

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
      <Flex justifyContent="flex-end">
        <Box overflowX="hidden">
          <SlideWrapper>
            <Slide visible={false} from="right" duration={1000}>
              <Text>Animated content.</Text>
            </Slide>
          </SlideWrapper>
        </Box>
      </Flex>
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

export { SLIDE_EXAMPLES_META }
