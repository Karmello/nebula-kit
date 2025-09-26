import { ComponentMeta } from 'client/definitions'
import { ToolbarStartProps } from 'lib/components'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'

const TOOLBAR_START_PROPS_META: ComponentMeta<ToolbarStartProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { TOOLBAR_START_PROPS_META }
