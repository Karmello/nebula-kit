import { useRef, useState } from 'react'

import { FocusTrap } from '../FocusTrap'

export const FocusTrapHarness = () => {
  const [open, setOpen] = useState(false)
  const trapRef = useRef<HTMLDivElement | null>(null)

  return (
    <div>
      <button onClick={() => setOpen(true)}>open</button>

      {open && (
        <FocusTrap tagRef={trapRef} active={open} onFocusEscape={() => setOpen(false)}>
          <div ref={trapRef}>
            <input />
            <button onClick={() => setOpen(false)}>close</button>
          </div>
        </FocusTrap>
      )}
    </div>
  )
}
