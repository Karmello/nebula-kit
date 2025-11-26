import { ComponentMeta } from 'client/definitions'
import { DialogProps } from 'lib/components/overlays/Dialog'

import { DIALOG_PROPS_META } from './props'
import { DIALOG_EXAMPLES_META } from './examples'

import { DIALOG_HEADER_META } from './DialogHeader/_index'
import { DIALOG_CONTENT_META } from './DialogContent/_index'
import { DIALOG_FOOTER_META } from './DialogFooter/_index'

const DIALOG_META: ComponentMeta<DialogProps> = {
  overview: {
    plan: 'pro',
    title: '...',
    description: ['...'],
    composedOf: ['Portal', 'Flex', 'Box', 'Button'],
    rendersAs: ['dialog'],
    slots: ['Dialog.Header', 'Dialog.Content', 'Dialog.Footer'],
  },
  props: DIALOG_PROPS_META,
  examples: DIALOG_EXAMPLES_META,
}

export default {
  Dialog: DIALOG_META,
  'Dialog.Header': DIALOG_HEADER_META,
  'Dialog.Content': DIALOG_CONTENT_META,
  'Dialog.Footer': DIALOG_FOOTER_META,
}
