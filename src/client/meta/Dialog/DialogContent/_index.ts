import { ComponentMeta } from 'client/definitions'
import { DialogContentProps } from 'lib/components/overlays/Dialog'

import { DIALOG_CONTENT_PROPS_META } from './props'

const DIALOG_CONTENT_META: ComponentMeta<DialogContentProps> = {
  overview: {
    name: 'Dialog.Content',
    title: '...',
    description: ['...'],
    composedOf: ['Box'],
    rendersAs: ['div'],
  },
  props: DIALOG_CONTENT_PROPS_META,
}

export { DIALOG_CONTENT_META }
