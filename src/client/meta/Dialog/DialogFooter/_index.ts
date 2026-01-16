import { ComponentMeta } from 'client/definitions'
import { DialogFooterProps } from 'lib/components'

import { DIALOG_FOOTER_PROPS_META } from './props'

const DIALOG_FOOTER_META: ComponentMeta<DialogFooterProps> = {
  overview: {
    name: 'Dialog.Footer?',
    title: 'Footer area of the dialog.',
    features: ['for actions'],
    composedOf: ['Box'],
    topLevelTags: ['div'],
  },
  props: DIALOG_FOOTER_PROPS_META,
}

export { DIALOG_FOOTER_META }
