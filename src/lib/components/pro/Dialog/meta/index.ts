import { BOX_META } from 'lib/components/core/Box/meta'
import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_DIALOG_CLOSE_ON_BACKDROP_CLICK,
  DEFAULT_DIALOG_SIZE,
  DIALOG_SIZES,
} from '../constants'
import { type DialogProps } from '../types'
import { DIALOG_CHANGELOG } from './changelog'
import { DIALOG_EXAMPLES } from './examples'

export const DIALOG_META = {
  overview: {
    bundle: 'pro',
    title: 'Centered modal dialog for interrupting the current user flow.',
    features: [
      'renders above the page using Portal',
      'traps keyboard focus while open for accessibility',
      'supports header, content and footer slots for structured layout',
      'includes an optional close button and configurable dismissal behavior',
      'automatically disables page scrolling while open',
    ],
    composedOf: ['Box', 'Button', 'Scale', 'FocusTrap'],
    exposedTags: ['dialog'],
    slots: ['Dialog.Header', 'Dialog.Content', 'Dialog.Footer'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      options: ['Dialog.Header', 'Dialog.Content', 'Dialog.Footer'],
      isRequired: true,
      description:
        'Dialog.Content slot is required. Dialog.Header and Dialog.Footer are optional.',
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
    size: {
      options: DIALOG_SIZES,
      defaultValue: DEFAULT_DIALOG_SIZE,
      description: 'Defines the dialog width using predefined size presets.',
    },
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
  },
  examples: DIALOG_EXAMPLES,
  changelog: DIALOG_CHANGELOG,
} satisfies ComponentMeta<DialogProps>
