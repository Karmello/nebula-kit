import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { DialogHeaderProps } from 'lib/components'

const DIALOG_HEADER_PROPS_META: ComponentMeta<DialogHeaderProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
}

export { DIALOG_HEADER_PROPS_META }
