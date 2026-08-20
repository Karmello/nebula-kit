import { useState } from 'react'

import { Button } from 'lib/index.core'
import { type Example } from 'client/definitions'

import { Dialog } from '../'

const DialogWrapper = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Dialog.Header>Dialog header</Dialog.Header>
        <Dialog.Content>Dialog content</Dialog.Content>
        <Dialog.Footer>Dialog footer</Dialog.Footer>
      </Dialog>
      <Button
        tagAttrs={{
          onClick: () => {
            setOpen(true)
          },
        }}
      >
        Open dialog
      </Button>
    </>
  )
}

export const DIALOG_EXAMPLES: Example[] = [
  {
    code: `<Dialog open={open}>
  <Dialog.Content>Dialog content</Dialog.Content>
</Dialog>`,
    skip: true,
  },
  {
    jsx: <DialogWrapper />,
    code: `<Dialog open={open} onClose={() => setOpen(false)}>
  <Dialog.Header>Dialog header</Dialog.Header>
  <Dialog.Content>Dialog content</Dialog.Content>
  <Dialog.Footer>Dialog footer</Dialog.Footer>
</Dialog>`,
    description: 'Dialog with all three available slots present.',
  },
]
