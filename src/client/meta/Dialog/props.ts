import {
  DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK,
  DEFAULT_DIALOG_SCALE,
  DIALOG_SCALES,
} from 'lib/components/pro/Dialog/constants'
import type { DialogProps } from 'lib/components/pro/Dialog/types'
import type { DocProp } from 'client/definitions'

export const DIALOG_PROPS: Record<keyof DialogProps, DocProp> = {
  children: {
    options: ['Dialog.Header', 'Dialog.Content', 'Dialog.Footer'],
    isRequired: true,
    description: 'Dialog.Content slot is required. Dialog.Header and Dialog.Footer are optional.',
  },
  closeOnBackdropClick: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK),
    description:
      'Controls whether clicking the backdrop closes the dialog. Requires onClose to be provided.',
  },
  onClose: {
    options: ['() => void'],
    description:
      'Called when the dialog requests to close (ESC key, close button or backdrop click when enabled). The parent component must update the "open" prop in response.',
  },
  open: {
    options: ['boolean'],
    isRequired: true,
    description: 'Controls whether the dialog is open.',
  },
  scale: {
    options: DIALOG_SCALES,
    defaultValue: DEFAULT_DIALOG_SCALE,
    description: 'Defines the dialog width using predefined size presets.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
}
