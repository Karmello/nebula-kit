import { ComponentMeta } from 'client/definitions'
import { ToolbarMainProps } from 'lib/components'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'

const TOOLBAR_MAIN_PROPS_META: ComponentMeta<ToolbarMainProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { TOOLBAR_MAIN_PROPS_META }
