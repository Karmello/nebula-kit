import { ComponentMeta } from 'client/definitions'
import { ToolbarMainProps } from 'lib/components'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'

const TOOLBAR_MAIN_PROPS_META: ComponentMeta<ToolbarMainProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['ReactNode', '(context) => ReactNode'],
    isRequired: true,
    description:
      'Accepts either a ReactNode or a render function that receives the Toolbar context as its argument.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { TOOLBAR_MAIN_PROPS_META }
