import { useEffect, useState } from 'react'

import { ComponentMeta } from 'client/definitions'
import { Animate, AnimateProps, Text } from 'lib/components'

const AnimateWrapper = ({ property }: { property: AnimateProps['property'] }) => {
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
    <Animate visible={visible} property={property} duration={1000}>
      <Text noWrap>Animated content.</Text>
    </Animate>
  )
}

const ANIMATE_EXAMPLES_META: ComponentMeta<AnimateProps>['examples'] = [
  {
    description: 'Animating the inlineSize property.',
    jsx: <AnimateWrapper property="inlineSize" />,
    code: `<Animate visible={visible} property="inlineSize" duration={1000}>
  <Text noWrap>Animated content.</Text>
</Animate>`,
  },
  {
    description: 'Animating the blockSize property.',
    jsx: <AnimateWrapper property="blockSize" />,
    code: `<Animate visible={visible} property="blockSize" duration={1000}>
  <Text noWrap>Animated content.</Text>
</Animate>`,
  },
]

export { ANIMATE_EXAMPLES_META }
