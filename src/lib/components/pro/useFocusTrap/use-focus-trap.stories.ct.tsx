import { useRef, useState } from 'react'

import { useFocusTrap } from './use-focus-trap'

const TrappedContent = ({ onClose }: { onClose: () => void }) => {
  const trapRef = useRef<HTMLDivElement | null>(null)

  useFocusTrap({ ref: trapRef, active: true, onFocusEscape: onClose })

  return (
    <div ref={trapRef}>
      <input />
      <button onClick={onClose}>close</button>
    </div>
  )
}

export const FocusTrapHarness = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setOpen(true)}>open</button>

      {open && <TrappedContent onClose={() => setOpen(false)} />}
    </div>
  )
}
