import { useEffect, useState } from 'react'

import { Rotate, RotateProps, Text } from 'lib/index.core'
import { type Example } from 'client/definitions'

const RotateWrapper = ({ children }: Partial<RotateProps>) => {
  const [angle, setAngle] = useState<number>(0)
  let interval: NodeJS.Timeout | null = null

  useEffect(() => {
    interval = setInterval(() => {
      setAngle(angle => (angle += 90))
    }, 1000)

    return () => {
      clearInterval(interval)
      interval = null
    }
  }, [])

  return <Rotate angle={angle}>{children}</Rotate>
}

export const ROTATE_EXAMPLES: Example[] = [
  {
    description: 'Rotation is triggered by changing the value of the angle prop.',
    jsx: (
      <RotateWrapper>
        <Text>Text</Text>
      </RotateWrapper>
    ),
    code: `<Rotate angle={angle}>
  <Text>Text</Text>
</Rotate>`,
  },
]
