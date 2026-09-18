import { useRef } from 'react'

import { useFocusTrap } from 'lib/components/pro/useFocusTrap'
import { Box, Button } from 'lib/index.core'
import { type DocExample } from 'client/definitions'

const FocusTrapWrapper = () => {
  const ref = useRef(null)

  useFocusTrap({ ref, active: true })

  return (
    <Box display="flex" elemRef={ref} gap="8px">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Box>
  )
}

export const USE_FOCUS_TRAP_EXAMPLES: DocExample[] = [
  {
    description: 'Focus stays locked between the three buttons while the trap is active.',
    jsx: <FocusTrapWrapper />,
    code: `// ref must point to the same DOM element that visually contains the focusable content
const ref = useRef(null)

useFocusTrap({ ref, active: true })

return (
  <Box display="flex" elemRef={ref} gap="8px">
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </Box>
)`,
  },
]
