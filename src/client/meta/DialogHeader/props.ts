import type { DialogHeaderProps } from 'lib/components/pro/Dialog/slots/DialogHeader/types'
import type { DocProp } from 'client/definitions'

export const DIALOG_HEADER_PROPS: Record<keyof DialogHeaderProps, DocProp> = {
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
