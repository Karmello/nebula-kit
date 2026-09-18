import type { DialogContentProps } from 'lib/components/pro/Dialog/slots/DialogContent/types'
import type { DocProp } from 'client/definitions'

export const DIALOG_CONTENT_PROPS: Record<keyof DialogContentProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
}
