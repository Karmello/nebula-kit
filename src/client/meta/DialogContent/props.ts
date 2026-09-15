import type { DialogContentProps } from 'lib/components/pro/Dialog/slots/DialogContent/types'
import type { DocProp } from 'client/definitions'

export const DIALOG_CONTENT_PROPS: Record<keyof DialogContentProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
}
