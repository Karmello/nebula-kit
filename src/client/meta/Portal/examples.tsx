import { useRef, useState } from 'react'

import { ComponentMeta } from 'client/definitions'
import { Box, Button, Portal, PortalProps } from 'lib/components'

const PortalWrapper = ({ placement }: Partial<PortalProps>) => {
  const [visible, setVisible] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>
        Toggle portal
      </Button>
      {visible ? (
        <Portal anchorRef={buttonRef} placement={placement}>
          <Box drawable variant="outline" color="blue" intent="primary">
            Portal content
          </Box>
        </Portal>
      ) : null}
    </>
  )
}

const PORTAL_EXAMPLES_META: ComponentMeta<PortalProps>['examples'] = [
  {
    code: `const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)
\t
return (
  <>
    <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>
      Toggle portal
    </Button>
    {visible ? (
      <Portal anchorRef={buttonRef} placement="bottom-start">
        Portal content
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

export { PORTAL_EXAMPLES_META }
