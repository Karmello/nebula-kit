import { ComponentMeta } from 'client/definitions'

import { BOX_PROPS_META } from '../../../../core/Box/meta/props'
import { type DialogContentProps } from '../../slots/DialogContent/definitions'

const DIALOG_CONTENT_PROPS_META: ComponentMeta<DialogContentProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
}

export { DIALOG_CONTENT_PROPS_META }
