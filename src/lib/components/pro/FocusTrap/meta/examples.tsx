import { useRef } from 'react'

import { Button, Flex } from 'lib/index.core'
import { type Example } from 'client/definitions'

import { FocusTrap } from '../focus-trap'

const FocusTrapWrapper = () => {
  const ref = useRef(null)

  return (
    <FocusTrap tagRef={ref} active>
      <Flex tagRef={ref} gap="8px">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Flex>
    </FocusTrap>
  )
}

export const FOCUS_TRAP_EXAMPLES: Example[] = [
  {
    description: 'Focus stays locked between the three buttons while the trap is active.',
    jsx: <FocusTrapWrapper />,
    code: `// The tagRef must point to the same DOM element that visually contains the focusable content
const ref = useRef(null)

return (
  <FocusTrap tagRef={ref} active>
    <Flex tagRef={ref} gap="8px">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  </FocusTrap>
)`,
  },
]
