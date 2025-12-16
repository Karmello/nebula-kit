import { useEffect, useState } from 'react'

import { ComponentMeta } from 'client/definitions'
import { Resize, ResizeProps, Text } from 'lib/components'

const ResizeWrapper = ({ property }: { property: ResizeProps['property'] }) => {
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

  return (
    <Resize visible={visible} property={property} duration={1000}>
      <Text noWrap>Animated content.</Text>
    </Resize>
  )
}

const RESIZE_EXAMPLES_META: ComponentMeta<ResizeProps>['examples'] = [
  {
    description: 'Animating the inlineSize property.',
    jsx: <ResizeWrapper property="inlineSize" />,
    code: `<Resize visible={visible} property="inlineSize" duration={1000}>
  <Text noWrap>Animated content.</Text>
</Resize>`,
    sandBoxWithNoPadding: true,
  },
  {
    description: 'Animating the blockSize property.',
    jsx: <ResizeWrapper property="blockSize" />,
    code: `<Resize visible={visible} property="blockSize" duration={1000}>
  <Text noWrap>Animated content.</Text>
</Resize>`,
    sandBoxWithNoPadding: true,
  },
]

export { RESIZE_EXAMPLES_META }
