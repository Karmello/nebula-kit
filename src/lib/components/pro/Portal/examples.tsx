import { useRef, useState } from 'react'

import { Box, Button } from 'lib/index.core'
import { type Example } from 'client/definitions'

import { type PortalProps } from './definitions'
import { Portal } from './portal'

const PortalWrapper = ({ placement }: Partial<PortalProps>) => {
  const [visible, setVisible] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>
        Toggle portal
      </Button>
      {visible ? (
        <Portal anchorRef={buttonRef} placement={placement} offset={15}>
          <Box drawable variant="solid" color="blue" intent="primary" padding="25px">
            This is Portal content
          </Box>
        </Portal>
      ) : null}
    </>
  )
}

export const PORTAL_EXAMPLES: Example[] = [
  {
    code: `const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)

return (
  <>
    <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>
      Toggle portal
    </Button>
    {visible ? (
      <Portal anchorRef={buttonRef} placement="bottom-start" offset={15}>
        <Box drawable variant="solid" color="blue" intent="primary" padding="25px">
          This is Portal content
        </Box>
      </Portal>
    ) : null}
  </>
)`,
    skip: true,
  },
  {
    description: 'Positioned above the anchor element, aligned to its left edge.',
    jsx: <PortalWrapper placement="top-start" />,
    noCode: true,
  },
  {
    description: 'Positioned above the anchor element, aligned to its center.',
    jsx: <PortalWrapper placement="top-center" />,
    noCode: true,
  },
  {
    description: 'Positioned above the anchor element, aligned to its right edge.',
    jsx: <PortalWrapper placement="top-end" />,
    noCode: true,
  },
  {
    description: 'Positioned to the right of the anchor element, aligned to its top edge.',
    jsx: <PortalWrapper placement="right-start" />,
    noCode: true,
  },
  {
    description: 'Positioned to the right of the anchor element, aligned to its center.',
    jsx: <PortalWrapper placement="right-center" />,
    noCode: true,
  },
  {
    description: 'Positioned to the right of the anchor element, aligned to its bottom edge.',
    jsx: <PortalWrapper placement="right-end" />,
    noCode: true,
  },
  {
    description: 'Positioned below the anchor element, aligned to its left edge.',
    jsx: <PortalWrapper placement="bottom-start" />,
    noCode: true,
  },
  {
    description: 'Positioned below the anchor element, aligned to its center.',
    jsx: <PortalWrapper placement="bottom-center" />,
    noCode: true,
  },
  {
    description: 'Positioned below the anchor element, aligned to its right edge.',
    jsx: <PortalWrapper placement="bottom-end" />,
    noCode: true,
  },
  {
    description: 'Positioned to the left of the anchor element, aligned to its top edge.',
    jsx: <PortalWrapper placement="left-start" />,
    noCode: true,
  },
  {
    description: 'Positioned to the left of the anchor element, aligned to its center.',
    jsx: <PortalWrapper placement="left-center" />,
    noCode: true,
  },
  {
    description: 'Positioned to the left of the anchor element, aligned to its bottom edge.',
    jsx: <PortalWrapper placement="left-end" />,
    noCode: true,
  },
]
