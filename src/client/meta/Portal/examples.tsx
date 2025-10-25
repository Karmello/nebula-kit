import { useRef, useState } from 'react'

import { ComponentMeta } from 'client/definitions'
import { Button, Portal, PortalProps } from 'lib/components'

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
          Portal content
        </Portal>
      ) : null}
    </>
  )
}

const PORTAL_EXAMPLES_META: ComponentMeta<PortalProps>['examples'] = [
  {
    description: 'Portal positioned above the anchor element.',
    code: `const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)
    \n
return <>
  <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>Toggle portal</Button>
  <Portal anchorRef={buttonRef} placement="top">Portal content</Portal>
</>`,
    jsx: <PortalWrapper placement="top" />,
  },
  {
    description: 'Portal positioned to the right of the anchor element.',
    code: `const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)
    \n
return <>
  <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>Toggle portal</Button>
  <Portal anchorRef={buttonRef} placement="right">Portal content</Portal>
</>`,
    jsx: <PortalWrapper placement="right" />,
  },
  {
    description: 'Portal positioned below the anchor element.',
    code: `const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)
    \n
return <>
  <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>Toggle portal</Button>
  <Portal anchorRef={buttonRef} placement="bottom">Portal content</Portal>
</>`,
    jsx: <PortalWrapper placement="bottom" />,
  },
  {
    description: 'Portal positioned to the left of the anchor element.',
    code: `const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)
    \n
return <>
  <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>Toggle portal</Button>
  <Portal anchorRef={buttonRef} placement="left">Portal content</Portal>
</>`,
    jsx: <PortalWrapper placement="left" />,
  },
]

export { PORTAL_EXAMPLES_META }
