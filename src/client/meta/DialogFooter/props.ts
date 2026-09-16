import type { DialogFooterProps } from 'lib/components/pro/Dialog/slots/DialogFooter/types'
import type { DocProp } from 'client/definitions'

export const DIALOG_FOOTER_PROPS: Record<keyof DialogFooterProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
}
