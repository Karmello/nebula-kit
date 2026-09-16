import { useEffect, useRef, useState } from 'react'

import { useRotate } from 'lib/components/core/useRotate'
import { Text } from 'lib/index.core'
import { type DocExample } from 'client/definitions'

const RotateWrapper = () => {
  const [angle, setAngle] = useState<number>(0)
  const ref = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(angle => angle + 90)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useRotate({ ref, angle })

  return (
    <Text elemTag="span" elemRef={ref}>
      Text
    </Text>
  )
}

export const USE_ROTATE_EXAMPLES: DocExample[] = [
  {
    description: 'Rotation is triggered by changing the value of the angle argument.',
    jsx: <RotateWrapper />,
    code: `const ref = useRef(null)

useRotate({ ref, angle })

return (
  <Text elemTag="span" elemRef={ref}>
    Text
  </Text>
)`,
  },
]
