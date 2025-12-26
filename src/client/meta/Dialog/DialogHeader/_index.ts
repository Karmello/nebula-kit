import { ComponentMeta } from 'client/definitions'
import { DialogHeaderProps } from 'lib/components'

import { DIALOG_HEADER_PROPS_META } from './props'

const DIALOG_HEADER_META: ComponentMeta<DialogHeaderProps> = {
  overview: {
    name: 'Dialog.Header?',
    title: 'Header area of the dialog.',
    description: ['for the dialog title or heading content'],
    composedOf: ['Box'],
    topLevelTags: ['div'],
  },
  props: DIALOG_HEADER_PROPS_META,
}

export { DIALOG_HEADER_META }
