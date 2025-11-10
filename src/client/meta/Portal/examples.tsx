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
    description: 'Positioned above the anchor element, aligned to its left edge.',
    code: `const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)
    \n
return <>
  <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>Toggle portal</Button>
  <Portal anchorRef={buttonRef} placement="top-start">Portal content</Portal>
</>`,
    jsx: <PortalWrapper placement="top-start" />,
  },
  {
    description: 'Positioned above the anchor element, aligned to its right edge.',
    code: `const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)
    \n
return <>
  <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>Toggle portal</Button>
  <Portal anchorRef={buttonRef} placement="top-end">Portal content</Portal>
</>`,
    jsx: <PortalWrapper placement="top-end" />,
  },
  {
    description: 'Positioned to the right of the anchor element, aligned to its top edge.',
    code: `const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)
    \n
return <>
  <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>Toggle portal</Button>
  <Portal anchorRef={buttonRef} placement="right-start">Portal content</Portal>
</>`,
    jsx: <PortalWrapper placement="right-start" />,
  },
  {
    description: 'Positioned to the right of the anchor element, aligned to its bottom edge.',
    code: `const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)
    \n
return <>
  <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>Toggle portal</Button>
  <Portal anchorRef={buttonRef} placement="right-end">Portal content</Portal>
</>`,
    jsx: <PortalWrapper placement="right-end" />,
  },
  {
    description: 'Positioned below the anchor element, aligned to its left edge.',
    code: `const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)
    \n
return <>
  <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>Toggle portal</Button>
  <Portal anchorRef={buttonRef} placement="bottom-start">Portal content</Portal>
</>`,
    jsx: <PortalWrapper placement="bottom-start" />,
  },
  {
    description: 'Positioned below the anchor element, aligned to its right edge.',
    code: `const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)
    \n
return <>
  <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>Toggle portal</Button>
  <Portal anchorRef={buttonRef} placement="bottom-end">Portal content</Portal>
</>`,
    jsx: <PortalWrapper placement="bottom-end" />,
  },
  {
    description: 'Positioned to the left of the anchor element, aligned to its top edge.',
    code: `const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)
    \n
return <>
  <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>Toggle portal</Button>
  <Portal anchorRef={buttonRef} placement="left-start">Portal content</Portal>
</>`,
    jsx: <PortalWrapper placement="left-start" />,
  },
  {
    description: 'Positioned to the left of the anchor element, aligned to its bottom edge.',
    code: `const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)
    \n
return <>
  <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>Toggle portal</Button>
  <Portal anchorRef={buttonRef} placement="left-end">Portal content</Portal>
</>`,
    jsx: <PortalWrapper placement="left-end" />,
  },
]

export { PORTAL_EXAMPLES_META }
