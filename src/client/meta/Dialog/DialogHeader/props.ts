import { ComponentMeta } from 'client/definitions'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { DialogHeaderProps } from 'lib/components'

const DIALOG_HEADER_PROPS_META: ComponentMeta<DialogHeaderProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { DIALOG_HEADER_PROPS_META }
