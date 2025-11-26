import { ComponentMeta } from 'client/definitions'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { DialogContentProps } from 'lib/components/overlays/Dialog'

const DIALOG_CONTENT_PROPS_META: ComponentMeta<DialogContentProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { DIALOG_CONTENT_PROPS_META }
