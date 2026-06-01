import { useState } from 'react'

import { ComponentMeta } from 'client/definitions'

import { Dialog, type DialogProps } from '..'
import { Button } from '../../../core/Button'

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

const DIALOG_EXAMPLES_META: ComponentMeta<DialogProps>['examples'] = [
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

export { DIALOG_EXAMPLES_META }
