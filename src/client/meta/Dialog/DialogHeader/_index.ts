import { ComponentMeta } from 'client/definitions'
import { DialogHeaderProps } from 'lib/components/pro/overlays/Dialog'

import { DIALOG_HEADER_PROPS_META } from './props'

const DIALOG_HEADER_META: ComponentMeta<DialogHeaderProps> = {
  overview: {
    name: 'Dialog.Header?',
    title: 'Heading area of the dialog.',
    composedOf: ['Box'],
    rendersAs: ['div'],
  },
  props: DIALOG_HEADER_PROPS_META,
}

export { DIALOG_HEADER_META }
