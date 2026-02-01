import { ComponentMeta } from 'client/definitions'
import { DialogProps } from 'lib/components'

import {
  DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK,
  DEFAULT_DIALOG_SIZE,
  DIALOG_SIZES,
} from 'lib/components/pro/overlays/Dialog'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const DIALOG_PROPS_META: ComponentMeta<DialogProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['Dialog.Header', 'Dialog.Content', 'Dialog.Footer'],
    isRequired: true,
    description: 'Dialog.Content slot is required. Dialog.Header and Dialog.Footer are optional.',
    tooltip: ['Dialog.Header', 'Dialog.Content', 'Dialog.Footer'],
  },
  closeOnBackdropClick: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK),
    description: 'Controls whether clicking the backdrop closes the dialog. Requires onClose to be provided.',
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
  size: {
    options: DIALOG_SIZES,
    defaultValue: DEFAULT_DIALOG_SIZE,
    description: 'Defines the dialog width using predefined size presets.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { DIALOG_PROPS_META }
