import { ComponentMeta } from 'client/definitions'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { SplitViewMainBarProps } from 'lib/components'

const SPLIT_VIEW_MAIN_BAR_PROPS_META: ComponentMeta<SplitViewMainBarProps>['props'] = {
  tag: HTML_TAG_PROPS_META.tag,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
}

export { SPLIT_VIEW_MAIN_BAR_PROPS_META }
