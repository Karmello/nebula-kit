import { useEffect, useRef, useState } from 'react'

import { Box } from 'lib/components/core/Box'
import { Text } from 'lib/components/core/Text'
import { useSlide, type UseSlideFrom } from 'lib/components/core/useSlide'
import { type DocExample } from 'client/definitions'

const SlideWrapper = ({ from }: { from: UseSlideFrom }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setVisible(true)

    const interval = setInterval(() => {
      setVisible(visible => !visible)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useSlide({ ref, from, visible, duration: 1000 })

  return (
    <Box elemRef={ref} display="inline-block">
      <Text>Animated content.</Text>
    </Box>
  )
}

export const USE_SLIDE_EXAMPLES: DocExample[] = [
  {
    description: 'Sliding in from the left.',
    jsx: <SlideWrapper from="left" />,
    code: `const ref = useRef(null)

useSlide({ ref, from: 'left', visible, duration: 1000 })

return (
  <Box elemRef={ref} display="inline-block">
    <Text>Animated content.</Text>
  </Box>
)`,
    sandBoxWithNoPadding: true,
  },
  {
    description: 'Sliding in from the right.',
    jsx: (
      <Box display="flex" justifyContent="flex-end">
        <Box overflowX="hidden">
          <SlideWrapper from="right" />
        </Box>
      </Box>
    ),
    code: `const ref = useRef(null)

useSlide({ ref, from: 'right', visible, duration: 1000 })

return (
  <Box elemRef={ref} display="inline-block">
    <Text>Animated content.</Text>
  </Box>
)`,
    sandBoxWithNoPadding: true,
  },
  {
    description: 'Sliding in from the top.',
    jsx: (
      <Box overflowX="hidden">
        <SlideWrapper from="top" />
      </Box>
    ),
    code: `const ref = useRef(null)

useSlide({ ref, from: 'top', visible, duration: 1000 })

return (
  <Box elemRef={ref} display="inline-block">
    <Text>Animated content.</Text>
  </Box>
)`,
    sandBoxWithNoPadding: true,
  },
]
