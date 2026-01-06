import { ComponentMeta } from 'client/definitions'
import { DialogProps } from 'lib/components'

import { DIALOG_PROPS_META } from './props'
import { DIALOG_EXAMPLES_META } from './examples'

import { DIALOG_HEADER_META } from './DialogHeader/_index'
import { DIALOG_CONTENT_META } from './DialogContent/_index'
import { DIALOG_FOOTER_META } from './DialogFooter/_index'

const DIALOG_META: ComponentMeta<DialogProps> = {
  overview: {
    bundle: 'pro',
    title: 'Centered modal dialog for interrupting the current user flow.',
    description: [
      'renders above the page using Portal',
      'traps keyboard focus while open for accessibility',
      'supports header, content and footer slots for structured layout',
      'includes an optional close button and configurable dismissal behavior',
      'automatically disables page scrolling while open',
    ],
    composedOf: ['Portal', 'FocusTrap', 'Flex', 'Box', 'Button', 'Resize'],
    topLevelTags: ['dialog'],
    slots: ['Dialog.Header', 'Dialog.Content', 'Dialog.Footer'],
  },
  props: DIALOG_PROPS_META,
  examples: DIALOG_EXAMPLES_META,
  changelog: {
    '0.2.2': ['Released'],
  },
}

export default {
  Dialog: DIALOG_META,
  'Dialog.Header': DIALOG_HEADER_META,
  'Dialog.Content': DIALOG_CONTENT_META,
  'Dialog.Footer': DIALOG_FOOTER_META,
}
