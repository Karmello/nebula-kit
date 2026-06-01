import { ComponentMeta } from 'client/definitions'

import { type DialogContentProps } from '../../slots/DialogContent/definitions'
import { DIALOG_CONTENT_PROPS_META } from './props'

const DIALOG_CONTENT_META: ComponentMeta<DialogContentProps> = {
  overview: {
    bundle: 'pro',
    name: 'Dialog.Content',
    title: 'Primary content area of the dialog.',
    composedOf: ['Box'],
    topLevelTags: ['div'],
  },
  props: DIALOG_CONTENT_PROPS_META,
}

export { DIALOG_CONTENT_META }
