import { ComponentMeta } from 'client/definitions'
import { Rotate, Text } from 'lib/components'
import { RotateProps } from 'lib/components/motion/Rotate/definitions'
import { useEffect, useState } from 'react'

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

const ROTATE_EXAMPLES_META: ComponentMeta<RotateProps>['examples'] = [
  {
    description: 'Rotation is triggered by changing the value of the angle prop.',
    jsx: (
      <RotateWrapper>
        <Text intent="neutral">Text</Text>
      </RotateWrapper>
    ),
    code: `<Rotate angle={angle}>
  <Text intent="neutral">Text</Text>
</Rotate>`,
  },
]

export { ROTATE_EXAMPLES_META }
