import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { SplitViewSideProps } from 'lib/components'
import { DEFAULT_SPLIT_VIEW_SIDE_INTENT, DEFAULT_SPLIT_VIEW_SIDE_WIDTH } from 'lib/components/pro/layouts/SplitView'

const SPLIT_VIEW_SIDE_PROPS_META: ComponentMeta<SplitViewSideProps>['props'] = {
  brand: BOX_PROPS_META.brand,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  color: BOX_PROPS_META.color,
  inlineSize: {
    ...BOX_PROPS_META.inlineSize,
    defaultValue: DEFAULT_SPLIT_VIEW_SIDE_WIDTH,
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: JSON.stringify(DEFAULT_SPLIT_VIEW_SIDE_INTENT),
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  theme: BOX_PROPS_META.theme,
}

export { SPLIT_VIEW_SIDE_PROPS_META }
