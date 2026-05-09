import { useRef } from 'react'

import { ComponentMeta } from 'client/definitions'
import { Button, Flex, FocusTrap, FocusTrapProps } from 'lib/components'

const FocusTrapWrapper = () => {
  const ref = useRef(null)

  return (
    <FocusTrap tagRef={ref} active>
      <Flex tagRef={ref} gap="xs">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Flex>
    </FocusTrap>
  )
}

const FOCUS_TRAP_EXAMPLES_META: ComponentMeta<FocusTrapProps>['examples'] = [
  {
    description: 'Focus stays locked between the three buttons while the trap is active.',
    jsx: <FocusTrapWrapper />,
    code: `// The tagRef must point to the same DOM element that visually contains the focusable content
const ref = useRef(null)

return (
  <FocusTrap tagRef={ref} active>
    <Flex tagRef={ref} gap="xs">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  </FocusTrap>
)`,
  },
]

export { FOCUS_TRAP_EXAMPLES_META }
