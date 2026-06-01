import { useState } from 'react'

import { ComponentMeta } from 'client/definitions'

import { Box } from '../../../core/Box'
import { Button } from '../../../core/Button'
import { Scale } from '../../../pro/Scale'
import { type ScaleProps } from '../definitions'

const Example1 = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button onClick={() => setVisible(value => !value)}>Toggle scale</Button>
      <Scale visible={visible}>
        <Box drawable variant="solid" intent="primary" padding="md">
          Scaled content
        </Box>
      </Scale>
    </>
  )
}

const SCALE_EXAMPLES_META: ComponentMeta<ScaleProps>['examples'] = [
  {
    description: 'Scale transition controlled by `visible` prop.',
    jsx: <Example1 />,
    code: `<Scale visible={visible}>
  <Box drawable variant="solid" intent="primary" padding="md" marginLeft="sm">
    Scaled content
  </Box>
</Scale>`,
  },
]

export { SCALE_EXAMPLES_META }
