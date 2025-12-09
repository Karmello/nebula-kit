import { ComponentMeta } from 'client/definitions'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { ToolbarEndProps } from 'lib/components'

const TOOLBAR_END_PROPS_META: ComponentMeta<ToolbarEndProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { TOOLBAR_END_PROPS_META }
